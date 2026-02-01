"use client";

import React, { useEffect, useRef, memo } from "react";

interface ProceduralCloudProps {
  width: number;
  height: number;
  seed?: number;
  color?: string;
  className?: string;
  fluffiness?: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

const ProceduralCloud: React.FC<ProceduralCloudProps> = memo(({
  width,
  height,
  seed = 1,
  color = "255, 255, 255",
  className,
  fluffiness = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    // Skip if already rendered with same params
    if (renderedRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    renderedRef.current = true;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Simple seeded random
    let currentSeed = seed;
    const random = () => {
      const x = Math.sin(currentSeed++) * 10000;
      return x - Math.floor(x);
    };

    // Gaussian random
    const gaussianRandom = () => {
      let u = 0, v = 0;
      while (u === 0) u = random();
      while (v === 0) v = random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    // Safe drawing area
    const paddingX = width * 0.12;
    const paddingY = height * 0.12;
    const safeWidth = width - paddingX * 2;
    const safeHeight = height - paddingY * 2;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    // Optimized particle count
    const baseParticles = 45;
    const numParticles = Math.floor(baseParticles * fluffiness);
    const particles: Particle[] = [];

    // Fewer clusters (2-4 instead of 3-5)
    const numClusters = 2 + Math.floor(random() * 3);
    const clusters: { x: number; y: number; radiusBase: number; weight: number }[] = [];

    // Main cluster
    clusters.push({
      x: centerX,
      y: centerY,
      radiusBase: Math.min(safeWidth, safeHeight) * 0.35,
      weight: 4
    });

    // Secondary clusters
    for (let i = 0; i < numClusters - 1; i++) {
      const angle = (i / (numClusters - 1)) * Math.PI * 2 + random() * 0.8 - 0.4;
      const maxDist = Math.min(safeWidth, safeHeight) * 0.32;
      const dist = maxDist * (0.4 + random() * 0.5);

      clusters.push({
        x: centerX + Math.cos(angle) * dist,
        y: centerY + Math.sin(angle) * dist * 0.55,
        radiusBase: Math.min(safeWidth, safeHeight) * (0.18 + random() * 0.12),
        weight: 1.5 + random()
      });
    }

    const totalWeight = clusters.reduce((sum, c) => sum + c.weight, 0);

    // Max radius helper
    const getMaxRadius = (x: number, y: number): number => {
      const minDist = Math.min(
        x - paddingX,
        (width - paddingX) - x,
        y - paddingY,
        (height - paddingY) - y
      );
      return Math.max(10, minDist * 0.8);
    };

    // Opacity falloff
    const getOpacityFalloff = (x: number, y: number): number => {
      const dx = (x - centerX) / (safeWidth * 0.5);
      const dy = (y - centerY) / (safeHeight * 0.5);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.min(1, dist);
      return 1 - (t * t * (3 - 2 * t));
    };

    // Generate particles
    for (let i = 0; i < numParticles; i++) {
      let r = random() * totalWeight;
      let cluster = clusters[0];
      for (const c of clusters) {
        r -= c.weight;
        if (r <= 0) { cluster = c; break; }
      }

      const angle = random() * Math.PI * 2;
      const distFactor = Math.abs(gaussianRandom()) * 0.4 + 0.05;
      const dist = distFactor * cluster.radiusBase;

      let x = cluster.x + Math.cos(angle) * dist;
      let y = cluster.y + Math.sin(angle) * dist * 0.6;

      x = Math.max(paddingX + 20, Math.min(width - paddingX - 20, x));
      y = Math.max(paddingY + 20, Math.min(height - paddingY - 20, y));

      const maxRadius = getMaxRadius(x, y);

      const sizeVariation = random();
      let baseRadius: number;
      if (sizeVariation < 0.25) {
        baseRadius = Math.min(safeWidth, safeHeight) * (0.24 + random() * 0.14);
      } else if (sizeVariation < 0.6) {
        baseRadius = Math.min(safeWidth, safeHeight) * (0.14 + random() * 0.12);
      } else {
        baseRadius = Math.min(safeWidth, safeHeight) * (0.08 + random() * 0.08);
      }

      baseRadius *= fluffiness * 0.5;
      const radius = Math.min(baseRadius, maxRadius);

      const falloff = getOpacityFalloff(x, y);
      const baseOpacity = 0.25 + random() * 0.35;
      const opacity = baseOpacity * Math.max(0.2, falloff);

      particles.push({ x, y, radius, opacity });
    }

    // Sort by size (back to front)
    particles.sort((a, b) => b.radius - a.radius);

    // Draw particles with simplified gradients (3 stops for performance)
    particles.forEach((p) => {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);

      gradient.addColorStop(0, `rgba(${color}, ${p.opacity * 0.8})`);
      gradient.addColorStop(0.5, `rgba(${color}, ${p.opacity * 0.25})`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);

      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

  }, [width, height, seed, color, fluffiness]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ display: "block" }}
    />
  );
}, (prevProps, nextProps) => {
  // Custom comparison - only re-render if these specific props change
  return prevProps.width === nextProps.width &&
    prevProps.height === nextProps.height &&
    prevProps.seed === nextProps.seed &&
    prevProps.fluffiness === nextProps.fluffiness;
});

ProceduralCloud.displayName = 'ProceduralCloud';

export default ProceduralCloud;