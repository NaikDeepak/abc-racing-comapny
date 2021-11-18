import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRaces } from "../../redux/reducerSlice/raceSlice";
import RaceList from "../RaceList/RaceList";
import LoadingPage from "../../sharedComponents/Loading/Loading";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.races);
  console.log("entities", entities);

  useEffect(() => {
    dispatch(getRaces());
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="home">
      <RaceList raceList={entities} />
      <NewsContainer />
    </div>
  );
}
