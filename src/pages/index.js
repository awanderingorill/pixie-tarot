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
  width: 500px;
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

const Chart = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  font-size: 12px;
  padding-top: 1em;
  min-width: 500px;
`

const FirstChartItem = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  font-family: "Maria";
  text-transform: uppercase;
`

const SecondChartItem = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  font-family: "Maria";
  text-transform: uppercase;
`

const ThirdChartItem = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  font-family: "Maria";
  text-transform: uppercase;
`

const FourthChartItem = styled.div`
  grid-area: 1 / 4 / 2 / 5; 
  font-family: "Maria";
  text-transform: uppercase;
`

const FifthChartItem = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`

const SixthChartItem = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`

const SeventhChartItem = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`

const EighthChartItem = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`

const NinthChartItem = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`

const TenthChartItem = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`

const EleventhChartItem = styled.div`
  grid-area: 3 / 3 / 4 / 4;
`

const TwelfthChartItem = styled.div`
  grid-area: 3 / 4 / 4 / 5;
`

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
        <TagLine>Donation-Based</TagLine> 
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
          </Content>
        </Section>
        <Section>
          <Title>What kinds of readings are there?</Title>
          <Content>
            <p>We offer two kinds of readings: the three-card spread and the eleven-card spread.</p>

            <Chart>
              <FirstChartItem>Spread</FirstChartItem>
              <SecondChartItem>Description</SecondChartItem>
              <ThirdChartItem>Duration</ThirdChartItem>
              <FourthChartItem>Suggested Donation</FourthChartItem>
              <FifthChartItem>Three Cards</FifthChartItem>
              <SixthChartItem>The cards represent either Past, Present, and Future or Mind, Body, and Spirit. Your choice. </SixthChartItem>
              <SeventhChartItem>15-20min</SeventhChartItem>
              <EighthChartItem>$10</EighthChartItem>
              <NinthChartItem>Eleven Cards</NinthChartItem>
              <TenthChartItem>Our variation on the Celtic Cross. These full, thorough readings give you insight into the core of a situation, including information about your past, present, future, highest self, environment, hopes and fears, and outcome.</TenthChartItem>
              <EleventhChartItem>45min</EleventhChartItem>
              <TwelfthChartItem>$20</TwelfthChartItem>
            </Chart>
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