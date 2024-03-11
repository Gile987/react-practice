import { useRef, useState, useEffect } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const sources = [
    "/assets/1.mp4",
    "/assets/2.mp4",
    "/assets/3.mp4",
  ];

  useEffect(() => {
    if (isPlaying && videoRef.current.paused) {
      videoRef.current.play();
    } else if (!isPlaying && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      <video ref={videoRef} controls>
        {sources.map((source) => (
          <source key={source} src={source} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button onClick={stopVideo}>
        Stop
      </button>
    </div>
  );
};

export default VideoPlayer;
