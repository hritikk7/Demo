import React from "react";
import ReactPlayer from "react-player/youtube";
import { useRef, useEffect } from "react";
export default function NowPlaying({ currentUrl, isPlaying, previewStream, mediaBlobUrl }) {
  let playerHeight = 608;
  let playerWidth = 1080;
    console.log("previewStream", previewStream);
  const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
    if (!stream) {
      return null;
    }
    return (
      <video
        ref={videoRef}
        width={playerWidth}
        height={playerHeight}
        autoPlay
        controls
        src={mediaBlobUrl}
      />
    );
  };

  return (
    <div className="">
      {previewStream ? (
        <>
          <VideoPreview src={previewStream} stream={previewStream} />
        </>
      ) : (
        <ReactPlayer
          playing={isPlaying}
          height={`${playerHeight}px`}
          width={`${playerWidth}px`}
          url={currentUrl}
          controls={true}
          onError={() =>
            console.log(`Error playing video at Url ${currentUrl}`)
          }
        />
      )}
    </div>
  );
}
