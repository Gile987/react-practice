import { useRef, useState, useEffect } from "react";

const sources = ["/assets/1.mp4", "/assets/2.mp4", "/assets/3.mp4"];

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  useEffect(() => {
    if (isPlaying && videoRef.current.paused) {
      videoRef.current.play();
    } else if (!isPlaying && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current.src = sources[currentVideoIndex];
    videoRef.current.load();
    setIsPlaying(false);
  }, [currentVideoIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % sources.length;
    setCurrentVideoIndex(nextIndex);
  };

  const previousVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + sources.length) % sources.length;
    setCurrentVideoIndex(prevIndex);
  };

  return (
    <div>
      <video ref={videoRef} controls>
        Your browser does not support the video tag.
      </video>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={stopVideo}>Stop</button>
      <button onClick={previousVideo}>Previous</button>
      <button onClick={nextVideo}>Next</button>
    </div>
  );
};

export default VideoPlayer;
