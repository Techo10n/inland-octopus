import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InlandOctopusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <div className="w-12 h-8 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-sm mr-3"></div>
            <span className="text-lg font-medium text-gray-800">Inland Octopus</span>
          </div>
          <Link href="/" className="text-gray-600 hover:text-gray-900">Welcome</Link>
          <Link href="/gift-certificates" className="text-gray-600 hover:text-gray-900">Gift Certificates</Link>
        </div>
        <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
          Visit Us!
        </button>
      </nav>

      {/* Hero Section with Video Placeholder */}
      <div className="relative">
        <div className="h-[80vh] bg-gradient-to-br from-amber-800 via-teal-600 to-indigo-800 flex items-center justify-center relative overflow-hidden rounded-lg mx-6 mt-6">
          <div className="text-white text-lg font-medium">[train video here]</div>
          
          {/* Hero Text Overlay */}
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-6xl font-bold mb-2">Inland Octopus</h1>
            <p className="text-xl uppercase tracking-wider">A Toy Shop As It Was Meant To Be</p>
          </div>

          {/* Logo Badge */}
          <div className="absolute bottom-8 right-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">IO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Section with Product Categories */}
      <div className="relative bg-gradient-to-b from-sky-300 to-sky-400 min-h-screen py-16">
        {/* Floating Clouds */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Left Cloud */}
          <svg className="absolute top-8 left-12 w-48 h-32" viewBox="0 0 200 120" fill="none">
            <path d="M40 80C20 80 4 64 4 44C4 24 20 8 40 8C45 8 50 9 54 11C60 4 70 0 80 0C100 0 116 16 116 36C120 36 124 37 128 38C144 42 156 56 156 72C156 92 140 108 120 108H50C44 108 40 104 40 98V80Z" 
                  fill="white" fillOpacity="0.95" filter="drop-shadow(0 4p</div>x 8px rgba(0,0,0,0.1))"/>
          </svg>

          {/* Top Right Cloud */}
          <svg className="absolute top-16 right-16 w-56 h-36" viewBox="0 0 220 140" fill="none">
            <path d="M50 100C25 100 5 80 5 55C5 30 25 10 50 10C58 10 65 12 71 16C80 6 94 0 110 0C135 0 156 21 156 46C162 46 168 47 173 50C194 56 210 75 210 97C210 123 189 144 163 144H65C57 144 50 137 50 129V100Z" 
                  fill="white" fillOpacity="0.95" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
          </svg>

          {/* Middle Left Cloud */}
          <svg className="absolute top-64 left-8 w-44 h-28" viewBox="0 0 180 110" fill="none">
            <path d="M35 75C18 75 4 61 4 44C4 27 18 13 35 13C40 13 44 14 48 16C53 8 62 3 72 3C87 3 99 15 99 30C102 30 105 30 108 31C121 34 131 45 131 58C131 74 118 87 102 87H45C40 87 35 82 35 77V75Z" 
                  fill="white" fillOpacity="0.95" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
          </svg>

          {/* Middle Right Large Cloud */}
          <svg className="absolute top-48 right-20 w-52 h-34" viewBox="0 0 210 135" fill="none">
            <path d="M45 95C22 95 4 77 4 54C4 31 22 13 45 13C52 13 58 15 63 18C71 7 83 0 97 0C118 0 135 17 135 38C140 38 145 39 149 41C167 46 181 62 181 81C181 104 162 123 139 123H60C53 123 45 116 45 109V95Z" 
                  fill="white" fillOpacity="0.95" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
          </svg>

          {/* Bottom Left Small Cloud */}
          <svg className="absolute bottom-40 left-16 w-36 h-24" viewBox="0 0 150 95" fill="none">
            <path d="M30 65C15 65 3 53 3 38C3 23 15 11 30 11C34 11 37 12 40 13C44 6 51 2 59 2C71 2 81 12 81 24C83 24 85 24 87 25C96 27 103 35 103 44C103 56 93 66 81 66H38C34 66 30 62 30 58V65Z" 
                  fill="white" fillOpacity="0.95" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
          </svg>

          {/* Bottom Right Cloud */}
          <svg className="absolute bottom-32 right-12 w-50 h-32" viewBox="0 0 200 125" fill="none">
            <path d="M42 88C21 88 4 71 4 50C4 29 21 12 42 12C48 12 53 13 58 15C65 6 76 0 88 0C107 0 122 15 122 34C126 34 130 35 134 36C148 40 159 52 159 66C159 84 144 99 126 99H54C48 99 42 93 42 87V88Z" 
                  fill="white" fillOpacity="0.95" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
          </svg>

          {/* Additional Smaller Clouds for Depth */}
          <svg className="absolute top-32 left-1/3 w-32 h-20" viewBox="0 0 130 80" fill="none">
            <path d="M25 55C12 55 2 45 2 32C2 19 12 9 25 9C28 9 31 10 33 11C36 5 42 2 48 2C58 2 66 10 66 20C68 20 69 20 71 21C78 23 83 29 83 36C83 45 76 52 67 52H32C29 52 25 49 25 46V55Z" 
                  fill="white" fillOpacity="0.85" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"/>
          </svg>

          <svg className="absolute bottom-60 right-1/3 w-28 h-18" viewBox="0 0 115 75" fill="none">
            <path d="M22 52C11 52 2 43 2 32C2 21 11 12 22 12C25 12 27 13 29 14C32 8 37 5 43 5C51 5 57 11 57 19C58 19 60 19 61 20C67 22 71 27 71 33C71 41 65 47 58 47H29C26 47 22 44 22 41V52Z" 
                  fill="white" fillOpacity="0.85" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"/>
          </svg>
        </div>

        {/* Dotted Flight Paths */}
        <svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
          <path 
            d="M 200 150 Q 400 100 600 200 Q 800 250 1000 180" 
            stroke="black" 
            strokeWidth="3" 
            strokeDasharray="8,8" 
            fill="none"
            opacity="0.6"
          />
          <path 
            d="M 150 350 Q 350 300 550 400 Q 750 450 950 380" 
            stroke="black" 
            strokeWidth="3" 
            strokeDasharray="8,8" 
            fill="none"
            opacity="0.6"
          />
        </svg>

        {/* Product Category Cards */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            
            {/* Exciting Events */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-gray-600">Storefront with chalkboard sign</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                  Exciting Events
                </div>
              </div>
            </div>

            {/* Fantasy Fits */}
            <div className="relative lg:mt-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-200"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-gray-600">Costumes and dress-up items</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full font-semibold">
                  Fantasy Fits
                </div>
              </div>
            </div>

            {/* Whacky Whatevers */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-200"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-gray-600">Bubble maker and rainbow</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                  Whacky Whatevers
                </div>
              </div>
            </div>

            {/* Outlandish Octopuses */}
            <div className="relative lg:col-start-2 lg:mt-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-200"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-gray-600">Plush octopus toys</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                  Outlandish Octopuses®
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underwater Section */}
      <div className="relative bg-gradient-to-b from-blue-400 to-blue-600 py-20">
        {/* Octopus Tentacles */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0" width="300" height="200" viewBox="0 0 300 200">
            <path d="M0 200 Q50 150 100 180 Q150 120 200 160 Q250 100 300 140" 
                  fill="none" stroke="#7c3aed" strokeWidth="40" opacity="0.8"/>
            <circle cx="20" cy="190" r="8" fill="#f472b6"/>
            <circle cx="80" cy="170" r="8" fill="#f472b6"/>
            <circle cx="140" cy="150" r="8" fill="#f472b6"/>
            <circle cx="200" cy="140" r="8" fill="#f472b6"/>
            <circle cx="260" cy="130" r="8" fill="#f472b6"/>
          </svg>
          
          <svg className="absolute bottom-0 right-0" width="300" height="200" viewBox="0 0 300 200">
            <path d="M300 200 Q250 150 200 180 Q150 120 100 160 Q50 100 0 140" 
                  fill="none" stroke="#7c3aed" strokeWidth="40" opacity="0.8"/>
            <circle cx="280" cy="190" r="8" fill="#f472b6"/>
            <circle cx="220" cy="170" r="8" fill="#f472b6"/>
            <circle cx="160" cy="150" r="8" fill="#f472b6"/>
            <circle cx="100" cy="140" r="8" fill="#f472b6"/>
            <circle cx="40" cy="130" r="8" fill="#f472b6"/>
          </svg>
        </div>

        {/* Sea Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-700 to-blue-600"></div>
        
        {/* Coral and Sea Life */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <div className="flex justify-around items-end h-full px-8">
            <div className="w-6 h-12 bg-pink-400 rounded-t-full"></div>
            <div className="w-4 h-8 bg-orange-400 rounded-t-full"></div>
            <div className="w-8 h-16 bg-green-400 rounded-t-full"></div>
            <div className="w-5 h-10 bg-blue-300 rounded-t-full"></div>
            <div className="w-7 h-14 bg-yellow-400 rounded-t-full"></div>
            <div className="w-6 h-11 bg-purple-400 rounded-t-full"></div>
            <div className="w-4 h-9 bg-pink-300 rounded-t-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Walla Walla's premier<br/>
            purveyor of fun,<br/>
            foolishness, & always<br/>
            free gift wrapping<br/>
            since 2004.
          </h2>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gradient-to-b from-yellow-100 to-orange-100 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Find us in beautiful downtown Walla Walla!
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Store Photo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Store Front Photo</span>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Interactive Map</span>
              </div>
              <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
              <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded shadow text-sm">
                [this will be an<br/>
                interactive map<br/>
                on the real site]
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              7 E Main St, Walla Walla, WA 99362
            </p>
            <p className="text-lg text-gray-600">
              Open 10-5 Tuesday through Sunday
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sky-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-white text-sm mb-2">
            * Yes, it is Octopuses (not Octopi). I promise. But Octopi is a fun word!
          </p>
          
          <p className="text-white text-sm">
            © 2025 Inland Octopus. Made with &lt;3
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InlandOctopusPage;