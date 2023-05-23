import * as React from "react"
import styled, {createGlobalStyle} from "styled-components"
import {Link} from "gatsby"
import firstBg from "../images/bg.jpeg"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Pacifico&family=Playfair+Display:wght@400;600;800&display=swap');
 body{
  padding: 0;
  margin:0;
  box-sizing: border-box;
  font-family: "Montserrat",sans-serif;
 }
`;

const FirstHero = styled.div`
  height: 100vh;
  width: 100vw;
  background-image:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${firstBg});
  background-position: center;
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HeadPharagraph = styled.p`
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 20px;
    @media(min-width:768px){
      font-size: 34px;
      letter-spacing: 3px;
      margin-bottom: 40px;
    }
    @media(min-width:1024px){
      font-size: 44px;
      letter-spacing: 6px;
      transform: translateY(80px);
    }
    @media(min-width:1400px){
      font-size: 48px;
      letter-spacing: 10px;
    }
`
const HeadName = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 28px;
    margin-bottom: 20px;
    @media(min-width:768px){
      font-size: 34px;
      margin-bottom: 40px;
    }
    @media(min-width:1024px){
      transform: translate(100px, 70px) rotate(20deg);
      align-self: center;
    }
    @media(min-width:1400px){
      transform: translate(-100px, 70px) rotate(20deg);
    }
`

const FirstHeroText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
    @media(min-width:768px){
      margin-bottom: 70px;
    }
    @media(min-width:1024px){
      transform: translateY(60px);
      letter-spacing: -1px;
    }
`

const MoreInfoBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  background-color: #09A129;
  border: none;
  color: #fff;
  padding: 18px;
  border-radius: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
    @media(min-width: 1024px){
      font-size: 24px;
      transform: translateY(60px);
    }
`

const IndexPage = () => {
  return (
    <>
    <GlobalStyle />
    <FirstHero>
       <HeadPharagraph>Pysznie i zdrowo z Thermomix</HeadPharagraph>
       <HeadName>by Domi</HeadName>
       <FirstHeroText>PRZEDSTAWICIEL HANDLOWY THERMOMIX DOMINIKA KUDELA</FirstHeroText>
       <Link to={'/przedstawiciel_thermomix_krakow_wadowice/'}><MoreInfoBtn>Kliknij i dowiedz się więcej!</MoreInfoBtn></Link>
   </FirstHero>
   </>
  )
}

export default IndexPage

export const Head = () => <title>Pysznie i zdrowo z Thermomix</title>
