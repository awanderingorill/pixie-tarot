import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"
import GlobalFonts from "../fonts/fonts"
import background from "../images/pixie-bg.png"
import hannah from "../images/hannah.png"
import ana from "../images/ana.png"
import { device } from "../components/device"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #EFE4D9;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    color: #460000;
    background: url(${background});
    background-size: auto;
    background-repeat: no-repeat;
    margin: 0;
  }

  @media ${device.mobileL} {
    body {
      display: block;
      padding: 0 1em;
      background-position-x: right;
    }
  }

   a {
     color: #460000;
     text-decoration: underline;
   }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Inter";
  height: auto;
  width: 50vw;

  @media ${device.mobileL} {
    width: 90vw;
    align-items: center;
  }
`

const LogoWrapper = styled.div`
  margin: 10em 0;

  @media ${device.mobileL} {
    width: 80vw;
  }
`

const Logo = styled.div`
  font-family: "Recoleta Bold";
  font-size: 60px;

  @media ${device.mobileL} {
    font-size: 40px;
  }
`

const TagLine = styled.div`
`

const ContentWrapper = styled.div`
`

const Section = styled.div`
  width: 500px;
  display: block;
  margin-bottom: 4em;

  @media ${device.mobileL} {
    width: 80vw;
    margin-bottom: 2em;
  }
`

const Title = styled.p`
  font-family: "Recoleta Bold";
  font-size: 20px;
  margin-top: 0;
`

const Content = styled.div``

const Pics = styled.div`

  & > img {
    max-width: 45%;
    max-height: 45%;
    padding: 0;
    padding-right: 0.5em;
  }

  flex-flow: row;
  margin-bottom: 2em;
`

const Footer = styled.footer`
  align-self: center;
  text-align: center;
  padding-bottom: 4em;
`

export default function Home() {
  return (
    <>
    <Helmet title="Pixie Tarot" defer={false} />
    <GlobalFonts/>
    <GlobalStyle/>
    <Wrapper>
      <LogoWrapper>
        <Logo>Pixie Tarot</Logo>
        <TagLine>Virtual Tarot Readings</TagLine>
      </LogoWrapper>
      <ContentWrapper>
        <Section>
          <Title>What is tarot?</Title>
          <Content>
            Tarot is many things to many people, but in the simplest terms, it’s a deck of 78 cards. Each card has its own imagery and meaning. For hundreds of years, people have used these cards for divination.
          </Content>
        </Section>
        <Section>
          <Title>What kinds of readings are there?</Title>
          <Content>
            <p>We offer two kinds of readings: the three-card spread and the eleven-card spread.</p>
            <p>In our three-card spread, the cards represent either "Past, Present, and Future" or "Mind, Body, and Spirit." Your choice. Duration is usually around 20 minutes, and each reading is $20.</p>
            <p>The eleven-card spread is our variation on the Celtic Cross. These full, thorough readings give you insight into the core of a situation, including information about your past, present, future, highest self, environment, hopes and fears, and outcome. The duration is 45min, and they cost $45.</p>
            <p>If the cost of these readings is prohibitive for you, please email us at hello@pixie-tarot.com and we can work something out!</p>
          </Content>
        </Section>
        <Section>
          <Title>Book a reading</Title>
          <Content>
            You can book an appointment with us via <a href="https://calendly.com/pixie-tarot" target="new">Calendly</a>.
          </Content>
        </Section>
        <Section>
          <Title>About us</Title>
          <Content>
            <Pics>
              <img src={hannah}/>
              <img src={ana}/>
            </Pics>
            <p>Pixie Tarot was started in 2020 by two friends, Hannah and Ana. Both of us have years of experience with the tarot, and we are excited to share that with you!</p>
            <p>If you have any questions, please don't hesitate to email us at hello@pixie-tarot.com. You can also find us on <a href="http://instagram.com/pixie__tarot" target="new">Instagram</a>.</p>
          </Content>
        </Section>
      </ContentWrapper>
      <Footer>
      © {new Date().getFullYear()} Pixie Tarot
      </Footer>
    </Wrapper>
    </>
  );
}