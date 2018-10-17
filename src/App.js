import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/theme";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ defaultTheme }>
        <div>That's my app</div>
      </ThemeProvider>
    );
  };
}