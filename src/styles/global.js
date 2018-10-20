import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const StyledApp = createGlobalStyle`
  ${styledNormalize}

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    display: -webkit-box;
    min-height: 100vh;
    margin: 0 auto;
  }
`;

export default StyledApp;
