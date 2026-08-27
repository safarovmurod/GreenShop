import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Box } from "@mui/material";

// Манбаи видео (агар видеои худро дошта бошед, танҳо ин сатрро иваз кунед)
const VIDEO_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

// Видео бо ref идора мешавад: play / pause / toggle
const SuperSaleVideo = forwardRef(function SuperSaleVideo(props, ref) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    toggle: () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    },
  }));

  return (
    <Box
      component="video"
      ref={videoRef}
      src={VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      onClick={props.onClick}
      sx={{
        width: "100%",
        objectFit: "cover",
        backgroundColor: "#f0f0f0",
        height: "350px",
        borderRadius: "0px",
        cursor: "pointer",
        display: "block",
      }}
    />
  );
});

export default SuperSaleVideo;
