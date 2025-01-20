import React from 'react';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-magenta min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <MusicPlayer />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
