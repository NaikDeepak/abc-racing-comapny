import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AthleteDetail from './components/AthleteDetail/AthleteDetail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import VideoContainer from './components/VideoContainer/VideoContainer';
import AthleteContainer from './components/AthleteContainer/AthleteContainer';

const App = function () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="athletes" element={<AthleteContainer />} />

          <Route path="athletes/details">
            <Route path=":athleteId" element={<AthleteDetail />} />
          </Route>
          <Route path="videos" element={<VideoContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
