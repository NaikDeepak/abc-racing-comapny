import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../sharedComponents/Loading/Loading";
import "./VideoContainer.css";
import { getVideos } from "../../redux/reducerSlice/videoSlice";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { FormattedMessage } from "react-intl";

export default function VideoContainer() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.videos);
  const [selectedVideo, setSelectedVideo] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onVideoClick = (video) => {
    setSelectedVideo(video);
    handleShow();
  };

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="video-container">
      <div className="videos">
        <h2 className="video__title">
          <FormattedMessage
            id="app.racelist.top-trending-videos"
            defaultMessage="Top Trending Videos"
            description="Top Trending Videos"
          />
        </h2>
      </div>
      <VideoList videoList={entities} onVideoClick={onVideoClick} />
      <VideoPlayer
        video={selectedVideo}
        autoplay="1"
        rel="0"
        modest="1"
        handleClose={handleClose}
        show={show}
      />
    </div>
  );
}
