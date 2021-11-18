import React from 'react';
import { useParams } from 'react-router-dom';

const AthleteDetail = function () {
  const params = useParams();
  return (
    <div>
      AthleteDetail -
      {params.athleteId}
    </div>
  );
};

export default AthleteDetail;
