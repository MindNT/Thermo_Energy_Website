import React, { useState } from 'react';
import { IconPlayerPlay } from '@tabler/icons-react';

const VideoBlur = ({ thumbnailUrl, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Función para detectar si es una URL externa (YouTube, Vimeo, etc.) o un archivo local
  const isExternalUrl = (url) => {
    return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com') || url.startsWith('http');
  };

  return (
    <div className="relative w-full h-[470px] rounded-[25px] overflow-hidden">
      {/* Thumbnail con blur */}
      <div className={`absolute inset-0 transition-opacity duration-500 
                    ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
        <img 
          src={thumbnailUrl} 
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-20 h-20 bg-white/20 backdrop-blur-md rounded-full
                     flex items-center justify-center
                     transition-transform hover:scale-110"
        >
          <IconPlayerPlay size={40} className="text-white" />
        </button>
      </div>

      {/* Video */}
      {isPlaying && (
        <>
          {isExternalUrl(videoUrl) ? (
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
            />
          )}
        </>
      )}
    </div>
  );
};

export default VideoBlur;
