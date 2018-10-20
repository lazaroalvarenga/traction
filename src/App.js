import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScreenHome from "./screens/Home";
import Theme from "./styles/theme";
import StyledApp from "./styles/global";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <div>
          <StyledApp />
          <Router>
            <Route exact path="/" component={ScreenHome} />
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}
