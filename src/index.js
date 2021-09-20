import React from "react";
import { Provider } from "react-redux";
/* import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components"; */
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

import ThemeProvider from "./components/ThemeProvider";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals(console.log);
