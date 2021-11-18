import React from 'react';
import './Loading.css';

const LoadingPage = function () {
  return (
    <div className="loader">
      <img className="loader__image" src="/images/loader.gif" alt="loading..." />
    </div>
  );
};

export default LoadingPage;
