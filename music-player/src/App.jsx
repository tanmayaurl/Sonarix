import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Now Playing Section */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-white mb-4">Music Player</h2>
          {/* Circular Progress & Controls */}
          <div className="relative w-56 h-56 flex items-center justify-center mb-6">
            {/* Placeholder for circular progress */}
            <div className="absolute inset-0 rounded-full border-8 border-pink-400 border-t-yellow-300 animate-spin-slow"></div>
            <button className="z-10 bg-white/30 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-pink-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V15.75M8.25 9V15.75" />
              </svg>
            </button>
          </div>
          <div className="text-center text-white mb-4">
            <div className="text-xl font-bold">Love Me Like You Do</div>
            <div className="text-sm opacity-80">Ellie Goulding • 4:32</div>
          </div>
          <div className="flex justify-center gap-6 text-white text-2xl mb-4">
            <button>⟲</button>
            <button>♡</button>
            <button>⤒</button>
          </div>
          <div className="flex justify-between w-full text-white text-xs opacity-70">
            <span>Etota Bhalobashi</span>
            <span>Epitaph</span>
          </div>
        </div>
        {/* Playlist & Tracks Section */}
        <div className="flex-[1.2] flex flex-col gap-6">
          {/* Recently Added Tracks */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6">
            <h3 className="text-white text-base font-semibold mb-4">Recently Added Tracks</h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {/* Album covers placeholder */}
              <div className="w-20 h-20 bg-pink-300 rounded-xl flex-shrink-0"></div>
              <div className="w-20 h-20 bg-yellow-200 rounded-xl flex-shrink-0"></div>
              <div className="w-20 h-20 bg-purple-300 rounded-xl flex-shrink-0"></div>
            </div>
          </div>
          {/* All Tracks List */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6 flex-1">
            <h3 className="text-white text-base font-semibold mb-4">All Tracks</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                <div>
                  <div className="text-white font-medium">Wherever You Will Go</div>
                  <div className="text-xs text-white/70">The Calling • 3:54</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                <div>
                  <div className="text-white font-medium">Blank Space</div>
                  <div className="text-xs text-white/70">Taylor Swift • 4:07</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                <div>
                  <div className="text-white font-medium">Not Afraid</div>
                  <div className="text-xs text-white/70">Eminem • 3:29</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                <div>
                  <div className="text-white font-medium">Animals</div>
                  <div className="text-xs text-white/70">Maroon 5 • 4:25</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 