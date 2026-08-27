import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Box } from "@mui/material";

// Манбаи видео дар бораи растаниҳо (Wikimedia Commons, CC).
// Агар видеои худро дошта бошед: онро ба public/videos/ монед ва
// ин сатрро иваз кунед: const VIDEO_SRC = "/videos/super-sale.mp4";
const VIDEO_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Time-lapse_of_a_flower_blooming.webm";

// Манбаи захиравӣ (агар якумӣ кушода нашавад, браузер инро мегирад)
const VIDEO_SRC_BACKUP =
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Strawberry_growth_(Video).webm";

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
    >
      <source src={VIDEO_SRC} />
      <source src={VIDEO_SRC_BACKUP} />
    </Box>
  );
});

export default SuperSaleVideo;
