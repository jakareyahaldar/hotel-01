"use client"

import { useState } from "react";

export default function BookingSearch() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults, children, location });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 py-32   font-sans">
      <form onSubmit={handleSearch} className="space-y-6">
        
        {/* Top Row: Dates and Guests */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-black mb-2 flex items-center">
              Check-in <span className="text-red-600 ml-0.5">*</span>
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              className="w-full bg-transparent border-b border-black py-2 text-sm text-gray-700 focus:outline-none focus:border-red-700"
              placeholder="Check-in Date"
            />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-black mb-2 flex items-center">
              Check-out <span className="text-red-600 ml-0.5">*</span>
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              className="w-full bg-transparent border-b border-black py-2 text-sm text-gray-700 focus:outline-none focus:border-red-700"
              placeholder="Check-out Date"
            />
          </div>

          {/* Adults Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-black mb-2">
              Adults
            </label>
            <div className="relative">
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-white border border-black px-3 py-2.5 text-sm appearance-none focus:outline-none pr-10"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 border-l border-black">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Children Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-black mb-2">
              Children
            </label>
            <div className="relative">
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full bg-white border border-black px-3 py-2.5 text-sm appearance-none focus:outline-none pr-10"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 border-l border-black">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Row: Location */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-black mb-2 text-center">
            Location
          </label>
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white border border-black px-4 py-3 text-sm appearance-none focus:outline-none pr-12"
            >
              <option value="">—</option>
              <option value="new-york">New York</option>
              <option value="london">London</option>
              <option value="tokyo">Tokyo</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 border-l border-black">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Row: Search Button */}
        <button
          type="submit"
          className="w-full bg-[#A61A1A] hover:bg-[#8A1414] text-white font-bold tracking-widest py-4 px-6 text-sm transition-colors duration-200 uppercase"
        >
          Search
        </button>

      </form>
    </div>
  );
}