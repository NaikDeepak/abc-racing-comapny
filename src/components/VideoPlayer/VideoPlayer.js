import PropTypes from "prop-types";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./VideoPlayer.css";

function VideoPlayer({ video = {}, show = false, autoplay = 0, handleClose }) {
  const videoSrc = `https://www.youtube.com/embed/${video?.id?.videoId}?autoplay=${autoplay}`;

  if (!video) return <div />;
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.snippet.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <iframe
              className="player"
              type="text/html"
              width="100%"
              src={videoSrc}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title={video.snippet.title}
              allowFullScreen
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

VideoPlayer.propTypes = {
  autoplay: PropTypes.number,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  video: PropTypes.object,
};

export default VideoPlayer;
