import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./AthleteCard.css";

const AthleteCard = function ({ athlete }) {
  return (
    <Card key={athlete.competitor.id} className="athletecard">
      <Card.Img
        variant="top"
        src={`https://i.pravatar.cc/300?img=${athlete.rank}`}
        alt={athlete.competitor.name}
      />
      <Card.Body>
        <Card.Text className="athletecard__title">
          {athlete.competitor.name}
        </Card.Text>
        <Card.Title>
          <FormattedMessage
            id="app.athlete.athletecard.abbreviation"
            defaultMessage="Abbreviation"
            description="Abbreviation"
          />
          - {athlete.competitor.abbreviation}
        </Card.Title>
        <Card.Title>
          <FormattedMessage
            id="app.athlete.athletecard.rank"
            defaultMessage="Rank"
            description="Rank"
          />
          - {athlete.rank}
        </Card.Title>
        <Card.Title>
          <FormattedMessage
            id="app.athlete.athletecard.points"
            defaultMessage="Points"
            description="Points"
          />
          -{athlete.points}
        </Card.Title>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
};

AthleteCard.propTypes = {
  athlete: PropTypes.shape({
    competitor: PropTypes.shape({
      abbreviation: PropTypes.any,
      id: PropTypes.any,
      name: PropTypes.any,
    }),
    points: PropTypes.any,
    rank: PropTypes.any,
  }),
};

export default AthleteCard;
