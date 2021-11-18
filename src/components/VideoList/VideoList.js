import PropTypes from "prop-types";
import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.css";

const VideoList = function ({ videoList, onVideoClick }) {
  return (
    <div className="container">
      <div className="row">
        {videoList &&
          videoList.map((video) => (
            <div
              key={video.id.videoid}
              className="col-lg-3 col-md-4 d-flex align-items-stretch videocard-container"
            >
              <VideoCard video={video} onVideoClick={onVideoClick} />
            </div>
          ))}
      </div>
    </div>
  );
};

VideoList.propTypes = {
  onVideoClick: PropTypes.func,
  videoList: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default VideoList;
