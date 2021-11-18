import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import LoadingPage from "../../sharedComponents/Loading/Loading";
import "./AthleteContainer.css";
import { getAthletes } from "../../redux/reducerSlice/athleteSlice";
import AthleteList from "../AthleteList/AthleteList";

export default function AthleteContainer() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.athletes);

  useEffect(() => {
    dispatch(getAthletes());
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="athelete-container">
      <div>
        <h2 className="athlete__title">
          <FormattedMessage
            id="app.athlete.athletecard.top-athletes"
            defaultMessage="Top 10 Athletes"
            description="Top 10 Athletes"
          />
        </h2>
      </div>
      <AthleteList athleteList={entities} />
    </div>
  );
}
