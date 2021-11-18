import PropTypes from "prop-types";
import React from "react";
import AthleteCard from "../AthleteCard/AthleteCard";
import "./AthleteList.css";

const AthleteList = function ({ athleteList }) {
  return (
    <div className="athlete-list">
      {athleteList &&
        athleteList
          .slice(0, 10)
          .map((athlete) => (
            <AthleteCard key={athlete.competitor.id} athlete={athlete} />
          ))}
    </div>
  );
};

AthleteList.propTypes = {
  athleteList: PropTypes.shape({
    slice: PropTypes.func,
  }),
};

export default AthleteList;
