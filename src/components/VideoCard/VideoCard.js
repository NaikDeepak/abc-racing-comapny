import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./VideoCard.css";

const VideoCard = function ({ video, onVideoClick }) {
  return (
    <Card
      className="videocard"
      onClick={() => onVideoClick(video)}
      data-toggle="modal"
      data-target=".bd-example-modal-lg"
    >
      <Card.Img
        variant="top"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />

      <Card.Body>
        <Card.Text>{video.snippet.title}</Card.Text>
        <Card.Title>{video.snippet.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

VideoCard.propTypes = {
  onVideoClick: PropTypes.func,
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.any,
        }),
      }),
      title: PropTypes.any,
    }),
  }),
};

export default VideoCard;
