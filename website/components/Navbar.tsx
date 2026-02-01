'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const imgLogo = "/images/logo.png";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    const baseClass = "font-medium text-[16px] transition-colors";
    const colorClass = isActive ? "text-[#49aeec]" : "text-black hover:text-[#49aeec]";
    return `${baseClass} ${colorClass}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] z-[100] bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="relative w-full max-w-[1440px] mx-auto h-full px-[60px] flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <Link href="/" className="relative w-[94.526px] h-[46px] rounded-[15px] overflow-hidden">
            <Image
              alt="Inland Octopus Logo"
              className="object-cover"
              src={imgLogo}
              fill
              sizes="95px"
              priority
            />
          </Link>
          <div className="flex items-center gap-[30px]">
            <Link href="/" className={getLinkClass('/')} style={{ fontFamily: 'Inter, sans-serif' }}>
              Welcome
            </Link>
            <Link href="/gift-certificates" className={getLinkClass('/gift-certificates')} style={{ fontFamily: 'Inter, sans-serif' }}>
              Gift Certificates
            </Link>
          </div>
        </div>
        <Link
          href="/#location"
          scroll={true}
          className="flex items-center justify-center bg-[#49aeec] h-[37px] w-[120px] rounded-[8px] cursor-pointer hover:bg-[#3facde] transition-colors"
        >
          <span className="font-medium text-[16px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Visit Us!
          </span>
        </Link>
      </div>
    </nav>
  );
}
