'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";

const imgGiftCardBg = "/images/gift-card-bg.png";
const imgGiftCardRibbon = "/images/gift-card-ribbon.png";
const imgInstagram = "/images/instagram.svg";
const imgFacebook = "/images/facebook.svg";

export default function GiftCertificates() {
  return (
    <div className="relative w-full min-h-screen bg-[#f5f5f5]">
      <Navbar />

      <main className="pt-[100px] pb-[40px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[60px]">
          {/* Title */}
          <h1
            className="text-[#49aeec] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-center leading-[1.1] mb-[30px] mt-[20px]"
            style={{ fontFamily: 'Cooper Black, serif' }}
          >
            Gift Certificates & Experiences
          </h1>

          {/* Gift Card Container - aspect ratio matches hero (1320x708) */}
          <div className="relative w-full max-w-[1320px] mx-auto" style={{ aspectRatio: '1320 / 708' }}>
            {/* Background Image */}
            <div
              className="absolute inset-0 rounded-[20px] lg:rounded-[40px] overflow-hidden"
              style={{ boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.5)' }}
            >
              <Image
                alt="Gift card background"
                className="object-cover"
                src={imgGiftCardBg}
                fill
                sizes="(max-width: 1024px) 100vw, 1320px"
                priority
              />
            </div>

            {/* Ribbon Overlay */}
            <div className="absolute inset-0 rounded-[20px] lg:rounded-[40px] overflow-hidden">
              <Image
                alt="Gift card ribbon"
                className="object-cover"
                src={imgGiftCardRibbon}
                fill
                sizes="(max-width: 1024px) 100vw, 1320px"
              />
            </div>

            {/* Buy a Card Button */}
            <a
              href="https://inland-octopus.cloveronline.com/all"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[4%] right-[3%] bg-[#49aeec] hover:bg-[#3facde] transition-colors rounded-[6px] lg:rounded-[8px] flex items-center justify-center cursor-pointer"
              style={{ width: 'clamp(110px, 14%, 180px)', height: 'clamp(36px, 7%, 52px)' }}
            >
              <span
                className="font-medium text-white text-center"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(13px, 1.5vw, 20px)' }}
              >
                Buy a Card
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#49aeec] mt-[40px]">
        <div className="w-full mx-auto flex flex-col items-center justify-center py-12 lg:py-20 gap-[25px] px-4">
          <div className="flex gap-[10px]">
            <a href="https://www.instagram.com/inlandoctopus/" target="_blank" rel="noopener noreferrer" className="block w-[30px] h-[30px]">
              <img alt="Instagram" className="w-full h-full" src={imgInstagram} />
            </a>
            <a href="https://www.facebook.com/pages/Inland%20Octopus/166042136742420/#" target="_blank" rel="noopener noreferrer" className="block w-[30px] h-[30px]">
              <img alt="Facebook" className="w-full h-full" src={imgFacebook} />
            </a>
          </div>
          <p
            className="w-full max-w-[595px] text-center text-white text-[14px] lg:text-[16px] font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            *Yes, it is Octopuses (not Octopi). I promise. But Octopi is a fun word!
          </p>
          <p
            className="w-full max-w-[595px] text-center text-white text-[14px] lg:text-[16px] font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {`© 2025 Inland Octopus. Made with <3`}
          </p>
        </div>
      </footer>
    </div>
  );
}
