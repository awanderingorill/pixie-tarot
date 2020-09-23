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
    background-color: #FFF8EE;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    color: #63003B;
    background: url(${background});
    background-size: auto;
    background-repeat: no-repeat;
    margin: 0;
  }

  @media ${device.mobileL} {
    body {
      display: block;
      padding: 0 1em;
    }
  }

   a {
     color: #63003B;
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
  font-family: "Maria";
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
  width: 470px;
  display: block;
  margin-bottom: 4em;

  @media ${device.mobileL} {
    width: 80vw;
    margin-bottom: 2em;
  }
`

const Title = styled.p`
  font-family: "Maria";
  font-size: 20px;
  margin-top: 0;
`

const Content = styled.div``

const Pics = styled.div`

  & > img {
    max-width: 45%;
    max-height: 45%;
    padding: 10px 10px 0 0;
  }

  flex-flow: row;
  margin-bottom: 2em;
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
        <TagLine>Donation-based</TagLine> 
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
          <Title>How does it work?</Title>
          <Content>
            <p>All of our readings are donation-based. This means that, while there is a suggested donation for each length of reading, we do not expect you to give and there is no shame if you are unable to meet that amount.</p>

            <p>We offer two kinds of readings: the three-card spread and the eleven-card spread.</p>

            <p>Three-card spread readings typically last 15-20 minutes. The cards represent either Past, Present, and Future or Mind, Body, and Spirit. Your choice. Suggested donation is $15.</p>

            <p>The eleven-card spread is our variation on the Celtic Cross. These full, thorough readings give you insight into the core of a situation, including information about your past, present, future, highest self, environment, hopes and fears, and outcome. They typically last around 45 minutes, and suggested donation is $30.</p>
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
            Pixie Tarot was started in 2020 by two friends, Hannah and Ana. Both of us have years of experience with the tarot, and we are excited to share that with you!
          </Content>
        </Section>
      </ContentWrapper>
    </Wrapper>
    </>
  );
}