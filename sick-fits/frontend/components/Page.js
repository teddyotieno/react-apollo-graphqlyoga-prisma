import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import theme from "./theme";

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  background: white;
`;

const InnerPage = styled.div`
  max-width: ${props => props.theme.maxWidth};
  background: ${props => props.theme.red};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family:'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format: ('woff2');
    font-weight: normal;
    font-style: normal
  }
  html {
    font-size: 10px;
    box-sizing: border-box;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next'
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <InnerPage>{this.props.children}</InnerPage>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
