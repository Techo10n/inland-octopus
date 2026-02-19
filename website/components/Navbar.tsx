'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const imgLogo = "/images/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    const baseClass = "font-medium text-[16px] transition-colors";
    const colorClass = isActive ? "text-black hover:text-[#49aeec] duration-300" : "text-black hover:text-[#49aeec] duration-300";
    return `${baseClass} ${colorClass}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[80px] z-[100] bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="relative w-full max-w-[1440px] mx-auto h-full px-4 lg:px-[60px] flex items-center justify-between">
          {/* Logo + Desktop nav links grouped left */}
          <div className="flex items-center gap-[30px]">
            <Link href="/" className="relative w-[94.526px] h-[46px] rounded-[15px] overflow-hidden" onClick={closeMenu}>
              <Image
                alt="Inland Octopus Logo"
                className="object-cover"
                src={imgLogo}
                fill
                sizes="95px"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center gap-[30px]">
              <Link href="/" className={getLinkClass('/')} style={{ fontFamily: 'Inter, sans-serif' }}>
                Welcome
              </Link>
              <Link href="/gift-certificates" className={getLinkClass('/gift-certificates')} style={{ fontFamily: 'Inter, sans-serif' }}>
                Gift Certificates
              </Link>
            </div>
          </div>

          {/* Desktop Visit Us button */}
          <Link
            href="/#location"
            scroll={true}
            className="hidden md:flex items-center justify-center bg-[#49aeec] h-[37px] w-[120px] rounded-[8px] cursor-pointer hover:bg-[#3facde] transition-colors"
          >
            <span className="font-medium text-[16px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Visit Us!
            </span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-[40px] h-[40px] gap-[5px] rounded-[8px] transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-[24px] h-[2px] bg-black rounded-full transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-[24px] h-[2px] bg-black rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-[24px] h-[2px] bg-black rounded-full transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden fixed top-[80px] left-0 w-full z-[99] bg-white/95 backdrop-blur-sm shadow-md overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '220px' : '0px' }}
      >
        <div className="flex flex-col px-6 py-4 gap-5">
          <Link
            href="/"
            className={getLinkClass('/')}
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={closeMenu}
          >
            Welcome
          </Link>
          <Link
            href="/gift-certificates"
            className={getLinkClass('/gift-certificates')}
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={closeMenu}
          >
            Gift Certificates
          </Link>
          <Link
            href="/#location"
            scroll={true}
            className="flex items-center justify-center bg-[#49aeec] h-[40px] rounded-[8px] cursor-pointer hover:bg-[#3facde] transition-colors"
            onClick={closeMenu}
          >
            <span className="font-medium text-[16px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Visit Us!
            </span>
          </Link>
        </div>
      </div>

      {/* Backdrop to close menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[80px] z-[98]"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
