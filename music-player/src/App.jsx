import React, { useState } from 'react';

const albumColors = [
  'from-pink-400 via-yellow-300 to-purple-400',
  'from-yellow-300 via-pink-400 to-purple-400',
  'from-purple-400 via-pink-400 to-yellow-300',
  'from-green-300 via-blue-400 to-purple-400',
  'from-orange-400 via-pink-400 to-yellow-300',
];

const tracks = [
  { title: 'Wherever You Will Go', artist: 'The Calling', time: '3:54', color: albumColors[0] },
  { title: 'Blank Space', artist: 'Taylor Swift', time: '4:07', color: albumColors[1] },
  { title: 'Not Afraid', artist: 'Eminem', time: '3:29', color: albumColors[2] },
  { title: 'Animals', artist: 'Maroon 5', time: '4:25', color: albumColors[3] },
];

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-purple via-accent-pink to-accent-yellow flex items-center justify-center p-4 font-body animate-fade-in">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Now Playing Section */}
        <div className="flex-1 bg-glass-bg border border-glass-border backdrop-blur-xl rounded-3xl shadow-glass p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-400 opacity-30 blur-2xl"></div>
          <h2 className="relative z-10 text-lg font-semibold text-white mb-4 font-display tracking-wide drop-shadow">Music Player</h2>
          {/* Circular Progress & Controls */}
          <div className="relative w-56 h-56 flex items-center justify-center mb-6 z-10">
            {/* Circular progress gradient border */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff6ec4" />
                  <stop offset="50%" stopColor="#f9d423" />
                  <stop offset="100%" stopColor="#a18cd1" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" stroke="url(#progressGradient)" strokeWidth="10" fill="none" strokeDasharray="282.74" strokeDashoffset="80" strokeLinecap="round" />
            </svg>
            <button className="z-10 bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-400 border-4 border-glass-border backdrop-blur-xs rounded-full w-20 h-20 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 hover:brightness-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white drop-shadow">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V15.75M8.25 9V15.75" />
              </svg>
            </button>
          </div>
          <div className="relative z-10 text-center text-white mb-4">
            <div className="text-2xl font-bold font-display drop-shadow animate-gradient-x bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 bg-clip-text text-transparent">
              {tracks[currentTrack].title}
            </div>
            <div className="text-sm opacity-80 font-body">{tracks[currentTrack].artist} • {tracks[currentTrack].time}</div>
          </div>
          <div className="relative z-10 flex justify-center gap-6 text-white text-2xl mb-4">
            <button className="transition-colors duration-200 hover:text-yellow-300">⟲</button>
            <button className="transition-colors duration-200 hover:text-pink-400">♡</button>
            <button className="transition-colors duration-200 hover:text-purple-400">⤒</button>
          </div>
          <div className="relative z-10 flex justify-between w-full text-white text-xs opacity-70 font-body">
            <span>Etota Bhalobashi</span>
            <span>Epitaph</span>
          </div>
        </div>
        {/* Playlist & Tracks Section */}
        <div className="flex-[1.2] flex flex-col gap-6">
          {/* Recently Added Tracks */}
          <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-3xl shadow-glass p-6 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-400 opacity-20 blur-2xl"></div>
            <h3 className="relative z-10 text-white text-base font-semibold mb-4 font-display tracking-wide drop-shadow">Recently Added Tracks</h3>
            <div className="relative z-10 flex gap-4 overflow-x-auto pb-2">
              {albumColors.map((color, i) => (
                <div key={i} className={`w-20 h-20 bg-gradient-to-br ${color} rounded-xl flex-shrink-0 shadow-2xl transition-transform duration-200 hover:scale-110 border-4 border-white/30`}></div>
              ))}
            </div>
          </div>
          {/* All Tracks List */}
          <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-3xl shadow-glass p-6 flex-1 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-400 opacity-10 blur-2xl"></div>
            <h3 className="relative z-10 text-white text-base font-semibold mb-4 font-display tracking-wide drop-shadow">All Tracks</h3>
            <ul className="relative z-10 space-y-4">
              {tracks.map((track, i) => (
                <li key={i} className="flex items-center gap-4 group cursor-pointer" onClick={() => setCurrentTrack(i)}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${track.color} rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-200 border-4 border-white/30`}></div>
                  <div>
                    <div className={`text-white font-medium font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-yellow-300 group-hover:to-purple-400 transition-colors duration-200`}>{track.title}</div>
                    <div className="text-xs text-white/70 font-body">{track.artist} • {track.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 