import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store/store";
import messages_en from "./translations/en.json";

// addLocaleData([...locale_en]);

const messages = {
  en: messages_en,
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
