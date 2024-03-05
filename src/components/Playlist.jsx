import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Button from "react-bootstrap/Button";

function Playlist({ url, key, handleVideoChange }) {
  const videoUrls = [
    "https://www.youtube.com/watch?v=5rJZ2_Zx-xM",
    "https://www.youtube.com/watch?v=CZVk4LWTmDs",
    "https://www.youtube.com/watch?v=xFve_2UKINY",
  ];
  const wrapperStyle = {
    cursor: "not-allowed", // Change cursor to not-allowed
    pointerEvents: "none", // Disable pointer events
  };
  return (
    <div className="container-small">
      {videoUrls.map((url, index) => (
        <div key={index} className="playlist-box">
          <ReactPlayer
            style={wrapperStyle}
            playing={false}
            light={true}
            height="200px"
            width="300px"
            url={url}
          />
          <Button
            onClick={() => handleVideoChange(url)}
            variant="secondary"
            size="sm"
          >
            Play
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
