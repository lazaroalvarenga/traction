import React, { Component } from "react";

import StyledTitle from "./style";

export default class Title extends Component {
  render({ children } = this.props) {
    return <StyledTitle>{children}</StyledTitle>;
  }
}
