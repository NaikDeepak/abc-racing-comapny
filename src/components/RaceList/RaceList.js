import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import "./RaceList.css";
import { FormattedMessage } from "react-intl";

const RaceList = function ({ raceList }) {
  if (!raceList) return <div />;
  return (
    <div className="racelist">
      <Carousel variant="dark">
        {raceList.slice(0, 5).map((race, index) => {
          const scheduled = new Date(race.scheduled).toDateString();
          const scheduled_end = new Date(race.scheduled_end).toDateString();
          return (
            <Carousel.Item key={race.id}>
              <Carousel.Caption className="racerlist__title">
                <h1>
                  <FormattedMessage
                    id="app.racelist.upcoming-races"
                    defaultMessage="Upcoming Races"
                    description="Upcoming Races"
                  />
                </h1>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={`https://source.unsplash.com/random/800x400?cycle,race&sig=${index}`}
                alt={race.description}
              />
              <Carousel.Caption className="race__caption">
                <h1>{race.description}</h1>
                <p>
                  {scheduled} - {scheduled_end}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

RaceList.propTypes = {
  raceList: PropTypes.shape({
    slice: PropTypes.func,
  }),
};

export default RaceList;
