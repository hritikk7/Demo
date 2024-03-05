import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NowPlaying from "./components/NowPlaying";
import { useState } from "react";
import Playlist from "./components/Playlist";
import Button from "react-bootstrap/Button";
import { useReactMediaRecorder } from "react-media-recorder";
function App() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/watch?v=LXb3EKWsInQ"
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [recordingStatus, setRecordingStatus] = useState("");
  const handleVideoChange = (url) => {
    setCurrentUrl(url);
  };
  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({ video: true });
  console.log("status of the recording", previewStream );
  // useState(() => {
  //   if (status === "idle") {
  //     setRecordingStatus("Not Recording");
  //   } else if (status === "acquiring_media") {
  //     setRecordingStatus("Getting Permissions");
  //   } else if (status === "acquiring_media") {
  //     setRecordingStatus("Recording Video");
  //   }else {
  //     setRecordingStatus("Not Recording ");
  //   }
  // }, [status]);

  // console.log("mediabloburl", mediaBlobUrl);
  // console.log("Recording status", recordingStatus);

  return (
    <div className="App">
      <div className="container">
        <div className="">
          <NowPlaying
            isPlaying={isPlaying}
            currentUrl={currentUrl}
            previewStream={previewStream}
            mediaBlobUrl={mediaBlobUrl}
          />
        </div>

        <Playlist
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
          handleVideoChange={handleVideoChange}
        />
      </div>
      <div className="button-container  ">
        <Button variant="primary mx-5" onClick={startRecording}>
          Start Recording
        </Button>
        <Button variant="danger" onClick={stopRecording}>
          Stop Recording
        </Button>
      </div>
      <p className="recording-status">{status}</p>
      <p className="recording-status">{mediaBlobUrl}</p>
    </div>
  );
}

export default App;
