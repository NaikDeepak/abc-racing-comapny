import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "./Home";

describe("Home test", () => {
  const initialState = {
    races: [
      {
        id: "sr:stage:635575",
        description: "Cycling Men 2021",
        scheduled: "2021-02-21T08:25:00+00:00",
        scheduled_end: "2021-10-19T23:00:00+00:00",
        type: "season",
        single_event: false,
      },
      {
        id: "sr:stage:637877",
        description: "Cycling Women 2021",
        scheduled: "2021-01-30T00:00:00+00:00",
        scheduled_end: "2021-10-23T23:00:00+00:00",
        type: "season",
        gender: "women",
        single_event: false,
      },
      {
        id: "sr:stage:604213",
        description: "Cycling Women 2020",
        scheduled: "2020-02-01T00:00:00+00:00",
        scheduled_end: "2020-10-25T00:00:00+00:00",
        type: "season",
        single_event: false,
      },
      {
        id: "sr:stage:537016",
        description: "Cycling Men 2020",
        scheduled: "2020-01-01T00:00:00+00:00",
        scheduled_end: "2020-12-31T00:00:00+00:00",
        type: "season",
        single_event: false,
      },
      {
        id: "sr:stage:415966",
        description: "Cycling Men 2019",
        scheduled: "2018-12-31T23:00:00+00:00",
        scheduled_end: "2019-12-30T23:00:00+00:00",
        type: "season",
        single_event: false,
      },
      {
        id: "sr:stage:329351",
        description: "Cycling Men 2018",
        scheduled: "2017-12-31T23:00:00+00:00",
        scheduled_end: "2018-12-30T23:00:00+00:00",
        type: "season",
        gender: "men",
        single_event: false,
      },
    ],
  };
  const mockStore = configureStore();
  let store;

  it("Renders Home", () => {
    store = mockStore(initialState);
    const wrapper = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper).not.toBeNull();
  });
});
