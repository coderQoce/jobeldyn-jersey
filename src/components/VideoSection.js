import React, { useRef, useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = '/Assets/videos/video1.MOV';
  
  const videoData = {
    title: 'Jobeldn Jersey',
    subtitle: 'Premium Quality • Custom Design',
    description: 'Watch our models wear their passion and wear the badge with pride.'
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-section">
      <div className="video-container">
        {/* Left Side - Text */}
        <div className="text-side">
          <div className="text-content">
            <span className="badge">✦ COLLECTION</span>
            <h1 className="main-title">{videoData.title}</h1>
            <p className="subtitle">{videoData.subtitle}</p>
            <p className="description">{videoData.description}</p>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="video-side">
          <div className="video-wrapper" onClick={handlePlayPause}>
            <video
              ref={videoRef}
              className="video-player"
              src={videoUrl}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div className="play-overlay">
                <div className="play-button">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;