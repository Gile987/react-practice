import { useRef, useState, useEffect } from "react";
import { styled } from "@mui/system";

const sources = ["/assets/1.mp4", "/assets/2.mp4", "/assets/3.mp4"];

const VideoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledVideo = styled('video')({
  width: '100%',
  maxHeight: '500px',
});

const StyledButton = styled('button')({
  margin: '5px',
  padding: '10px',
  backgroundColor: '#3f51b5',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
});

const ButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});

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
    <>
      <VideoContainer>
        <StyledButton onClick={previousVideo}>Previous</StyledButton>
        <StyledVideo ref={videoRef} controls>
          Your browser does not support the video tag.
        </StyledVideo>
        <StyledButton onClick={nextVideo}>Next</StyledButton>
      </VideoContainer>
      <ButtonGroup>
        <StyledButton onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</StyledButton>
        <StyledButton onClick={stopVideo}>Stop</StyledButton>
      </ButtonGroup>
    </>
  );
};

export default VideoPlayer;
