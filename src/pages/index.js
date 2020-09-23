import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import GlobalFonts from "../fonts/fonts"
import background from "../images/pixie-bg.png"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #FFF8EE;
  }

  body {
    font-family: "Inter";
    color: #63003B;
    background: url(${background});
    background-size: auto;
    background-repeat: no-repeat;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Inter";
  width: 50vw;
  height: 100vh;
`

const LogoWrapper = styled.div`
`

const Logo = styled.div`
  font-family: "Maria";
  font-size: 60px;
`

const TagLine = styled.div`
  width: 200px;
`

export default function Home() {
  return (
    <>
    <GlobalFonts/>
    <GlobalStyle/>
    <Wrapper>
      <LogoWrapper>
        <Logo>Pixie Tarot</Logo>
        <TagLine>Donation-based</TagLine> 
        <TagLine>Virtual Tarot Readings</TagLine>
      </LogoWrapper>
    </Wrapper>
    </>
  );
}