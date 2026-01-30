'use client';

import { motion } from "framer-motion";
import { memo } from "react";
import Navbar from "@/components/Navbar";
import ProceduralCloud from "@/components/ProceduralCloud";

const imgRainbow = "/images/rainbow.png";
const imgHills = "/images/hills.png";
const imgTentaclesText = "/images/tentacles-text.png";
const imgFrame4 = "/images/store-front.png";
const imgLine1 = "/images/line-1.png";
const imgLine2 = "/images/line-2.png";
const imgLine3 = "/images/line-3.png";
const imgRectangle3 = "/images/card-exciting-events.png";
const imgRectangle7 = "/images/card-fantasy-fits.png";
const imgRectangle8 = "/images/card-whacky-whatevers.png";
const imgRectangle9 = "/images/card-outlandish-octopuses.png";
const imgRectangle1 = "/images/hero-background.png";
const imgEllipse1 = "/images/badge.png";
// const imgInlandoctopuslargelogo1 = "/images/logo.png"; // Moved to Navbar
const imgVector = "/images/instagram.svg";
const imgVector1 = "/images/facebook.svg";
const imgOverlay = "/images/overlay.svg";

// Memoized cloud wrapper to prevent re-renders
const Cloud = memo(({
  className,
  width,
  height,
  fluffiness,
  seed,
  animClass
}: {
  className: string;
  width: number;
  height: number;
  fluffiness: number;
  seed: number;
  animClass: string;
}) => (
  <div className={`${className} cloud ${animClass}`}>
    <ProceduralCloud width={width} height={height} fluffiness={fluffiness} seed={seed} className="w-full h-full" />
  </div>
));
Cloud.displayName = 'Cloud';

export default function Home() {
  // handleScrollToLocation removed - handled by Navbar Link

  return (
    <div className="relative w-full min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          background: `linear-gradient(180deg,
            #f5f5f5 0%,
            #f5f5f5 12%,
            #d4e9f7 16%,
            #a8d4f0 20%,
            #7ec8ed 25%,
            #5bbde9 30%,
            #49aeec 40%,
            #3da5e8 55%,
            #4aabea 70%,
            #5db5ed 85%,
            #70bfef 100%
          )`,
          height: '4379px',
          zIndex: 0
        }}
      />

      {/* Subtle atmospheric haze overlay */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 150% 50% at 50% 60%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          height: '4379px',
          zIndex: 1
        }}
      />

      {/* Sun glow effect */}
      <div
        className="absolute pointer-events-none sun-glow"
        style={{
          top: '600px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255,248,220,0.5) 0%, rgba(255,223,150,0.2) 30%, transparent 70%)',
          zIndex: 2,
          mixBlendMode: 'soft-light'
        }}
      />

      {/* Fixed Navbar */}
      <Navbar />

      <div className="relative w-[1440px] mx-auto z-10" style={{ height: '4118px' }}>

        {/* Hero Section */}
        <div className="absolute left-[60px] top-[100px] w-[1320px] h-[708px] z-10 overflow-hidden rounded-[40px] group" style={{ boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.5)' }}>
          <div className="relative w-full h-full">
            <img
              alt="Hero background"
              className="w-full h-full object-cover"
              src={imgRectangle1}
            />
            <div className="absolute inset-0">
              <img alt="" className="w-full h-full" src={imgOverlay} />
            </div>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-[28px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              [train video here]
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-[40px] bottom-[100px] z-20"
          >
            <p
              className="text-[#f5f5f5] text-[100px]"
              style={{ fontFamily: 'Cooper Black, serif', lineHeight: '0.9', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Inland Octopus
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute left-[40px] top-[620px] z-20"
          >
            <p
              className="text-[#f5f5f5] text-[42px] tracking-wider"
              style={{ fontFamily: 'Copperplate, Copperplate Gothic Light, fantasy', lineHeight: '0.9', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              UNIQUE TOYS AND GIFTS
            </p>
          </motion.div>

          <div className="absolute right-[40px] bottom-[40px] w-[141px] h-[141px] animate-popIn" style={{ animationDelay: '0.6s' }}>
            <img
              alt="Badge"
              className="w-full h-full animate-spin [animation-play-state:paused] group-hover:[animation-play-state:running]"
              style={{ animationDuration: '3s' }}
              src={imgEllipse1}
            />
          </div>
        </div>

        {/* Clouds - Using CSS animations instead of framer-motion */}
        {/* Cloud-12 */}
        <Cloud className="absolute left-[-150px] top-[691px] w-[700px] h-[450px] pointer-events-none" width={700} height={450} fluffiness={2.5} seed={12} animClass="cloud-anim-1" />

        {/* Cloud-Extra-1 */}
        <Cloud className="absolute left-[1000px] top-[680px] w-[530px] h-[310px] pointer-events-none" width={530} height={310} fluffiness={2} seed={42} animClass="cloud-anim-2" />

        {/* Gallery Section */}
        <div className="absolute left-[180.5px] top-[931px] w-full h-[1680px]">
          <div className="absolute left-[207px] top-[161px] w-[755px] h-[489px] pointer-events-none">
            <img alt="" className="w-full h-full object-cover" src={imgLine1} />
          </div>
          <div className="absolute left-[191px] top-[547px] w-[499px] h-[496px] pointer-events-none">
            <img alt="" className="w-full h-full object-cover" src={imgLine2} />
          </div>
          <div className="absolute left-[399px] top-[1104px] w-[633px] h-[351px] pointer-events-none">
            <img alt="" className="w-full h-full object-cover" src={imgLine3} />
          </div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute left-0 top-0 w-[367px] h-[487px] cursor-pointer group"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div
              className="relative w-full h-full bg-white p-3 pb-16 rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)' }}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img alt="Exciting Events" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgRectangle3} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <p className="absolute left-[23px] bottom-[20px] text-gray-800 text-[24px]" style={{ fontFamily: 'Cooper Black, serif' }}>
              Exciting Events
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute left-[594px] top-[464px] w-[367px] h-[487px] cursor-pointer group"
            style={{ transform: 'rotate(1deg)' }}
          >
            <div
              className="relative w-full h-full bg-white p-3 pb-16 rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)' }}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img alt="Fantasy Fits" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgRectangle7} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <p className="absolute left-[23px] bottom-[20px] text-gray-800 text-[24px]" style={{ fontFamily: 'Cooper Black, serif' }}>
              Fantasy Fits
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute left-[107px] top-[752px] w-[367px] h-[487px] cursor-pointer group"
            style={{ transform: 'rotate(-1deg)' }}
          >
            <div
              className="relative w-full h-full bg-white p-3 pb-16 rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)' }}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img alt="Whacky Whatevers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgRectangle8} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <p className="absolute left-[23px] bottom-[20px] text-gray-800 text-[24px]" style={{ fontFamily: 'Cooper Black, serif' }}>
              Whacky Whatevers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute left-[714px] top-[1195px] w-[365px] h-[485px] cursor-pointer group"
            style={{ transform: 'rotate(2deg)' }}
          >
            <div
              className="relative w-full h-full bg-white p-3 pb-16 rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)' }}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img alt="Outlandish Octopuses" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgRectangle9} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <p className="absolute left-[23px] bottom-[20px] text-gray-800 text-[24px]" style={{ fontFamily: 'Cooper Black, serif' }}>
              Outlandish Octopuses*
            </p>
          </motion.div>
        </div>

        {/* More clouds with CSS animations */}
        <Cloud className="absolute left-[850px] top-[800px] w-[630px] h-[490px] pointer-events-none" width={630} height={490} fluffiness={2.5} seed={10} animClass="cloud-anim-3" />
        <Cloud className="absolute left-[1020px] top-[1000px] w-[670px] h-[365px] pointer-events-none" width={670} height={365} fluffiness={2.2} seed={11} animClass="cloud-anim-4" />
        <Cloud className="absolute left-[380px] top-[1180px] w-[700px] h-[390px] pointer-events-none" width={700} height={390} fluffiness={2.3} seed={9} animClass="cloud-anim-1" />
        <Cloud className="absolute left-[980px] top-[1300px] w-[870px] h-[530px] pointer-events-none" width={870} height={530} fluffiness={2.8} seed={8} animClass="cloud-anim-2" />
        <Cloud className="absolute left-[-80px] top-[1470px] w-[755px] h-[530px] pointer-events-none" width={755} height={530} fluffiness={2.6} seed={7} animClass="cloud-anim-3" />
        <Cloud className="absolute left-[1050px] top-[1800px] w-[670px] h-[390px] pointer-events-none" width={670} height={390} fluffiness={2.3} seed={66} animClass="cloud-anim-4" />
        <Cloud className="absolute left-[500px] top-[2000px] w-[670px] h-[380px] pointer-events-none" width={670} height={380} fluffiness={2.3} seed={5} animClass="cloud-anim-5" />
        <Cloud className="absolute left-[-230px] top-[2000px] w-[560px] h-[350px] pointer-events-none" width={560} height={350} fluffiness={2.1} seed={77} animClass="cloud-anim-6" />
        <Cloud className="absolute left-[-150px] top-[2160px] w-[770px] h-[560px] pointer-events-none" width={770} height={560} fluffiness={2.7} seed={3} animClass="cloud-anim-1" />
        <Cloud className="absolute left-[1070px] top-[2310px] w-[730px] h-[365px] pointer-events-none" width={730} height={365} fluffiness={2.4} seed={4} animClass="cloud-anim-2" />
        <Cloud className="absolute left-[80px] top-[2340px] w-[785px] h-[475px] pointer-events-none" width={785} height={475} fluffiness={2.6} seed={2} animClass="cloud-anim-3" />

        {/* Rainbow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[2797px] w-[1520px] h-[847px] pointer-events-none">
          <img alt="" className="w-full h-full object-cover" src={imgRainbow} />
        </div>

        {/* Large clouds near rainbow */}
        <Cloud className="absolute left-[820px] top-[2620px] w-[1260px] h-[755px] pointer-events-none" width={1260} height={755} fluffiness={3} seed={15} animClass="cloud-anim-4" />
        <Cloud className="absolute left-[-280px] top-[2770px] w-[870px] h-[475px] pointer-events-none" width={870} height={475} fluffiness={2.6} seed={13} animClass="cloud-anim-5" />
        <Cloud className="absolute left-[230px] top-[2700px] w-[770px] h-[490px] pointer-events-none" width={770} height={490} fluffiness={2.5} seed={99} animClass="cloud-anim-6" />
        <Cloud className="absolute left-[-160px] top-[2950px] w-[700px] h-[450px] pointer-events-none" width={700} height={450} fluffiness={2.4} seed={100} animClass="cloud-anim-1" />

        {/* Hills */}
        <div className="absolute left-[-48px] top-[3187px] w-[1536px] h-[1024px] pointer-events-none z-10">
          <img alt="" className="w-full h-full object-cover" src={imgHills} />
        </div>
      </div>

      {/* Tentacles & Text Section */}
      <div className="absolute left-0 top-[2844px] w-full h-[1274px] z-20">
        <img alt="" className="w-full h-full object-cover" src={imgTentaclesText} />
        <p
          className="absolute left-1/2 -translate-x-1/2 top-[410px] w-[476px] text-center text-white text-[40px] z-30"
          style={{ fontFamily: 'Cooper Black, serif' }}
        >
          {`Walla Walla's premier purveyor of fun, foolishness, & always free gift wrapping since 2004.`}
        </p>
      </div>

      {/* Location Section */}
      <div className="relative w-full z-20">
        <div
          id="location"
          className="relative w-full bg-[#e0dbc0] overflow-hidden"
          style={{
            borderBottomLeftRadius: '40px',
            borderBottomRightRadius: '40px',
            boxShadow: '0px -10px 20px 0px rgba(0,0,0,0.25), 0px 10px 20px 0px rgba(0,0,0,0.25)'
          }}
        >
          <div className="relative w-full max-w-[1440px] mx-auto h-[824px]">
            <p
              className="absolute left-1/2 -translate-x-1/2 top-[86px] text-center text-black text-[48px] whitespace-nowrap"
              style={{ fontFamily: 'Cooper Black, serif' }}
            >
              Find us in beautiful downtown Walla Walla!
            </p>

            <div
              className="absolute left-[132px] top-[211px] w-[558px] h-[389px] rounded-[40px] overflow-hidden"
              style={{ boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.25)' }}
            >
              <img
                alt="Store front"
                className="absolute left-0 top-0 w-[106.13%] h-[109.07%] object-cover"
                src={imgFrame4}
              />
            </div>

            <div
              className="absolute left-[750px] top-[211px] w-[558px] h-[389px] rounded-[40px] overflow-hidden"
              style={{ boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.25)' }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Inland%20Octopus%20Walla%20Walla&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-[650px] text-center">
              <p className="font-bold text-[24px] text-black mb-[10px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                7 E Main St, Walla Walla, WA 99362
              </p>
              <p className="font-light text-[24px] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
                Open 10-5 Tuesday through Sunday
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-full bg-[#49aeec] z-20">
        <div className="relative w-full mx-auto flex flex-col items-center justify-center py-20 gap-[25px]">
          <div className="flex gap-[10px]">
            <a href="https://www.instagram.com/inlandoctopus/" className="block w-[30px] h-[30px]">
              <img alt="Instagram" className="w-full h-full" src={imgVector} />
            </a>
            <a href="https://www.facebook.com/pages/Inland%20Octopus/166042136742420/#" className="block w-[30px] h-[30px]">
              <img alt="Facebook" className="w-full h-full" src={imgVector1} />
            </a>
          </div>
          <p className="w-[595px] text-center text-white text-[16px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            *Yes, it is Octopuses (not Octopi). I promise. But Octopi is a fun word!
          </p>
          <p className="w-[595px] text-center text-white text-[16px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            {`© 2025 Inland Octopus. Made with <3`}
          </p>
        </div>
      </div>
    </div>
  );
}
