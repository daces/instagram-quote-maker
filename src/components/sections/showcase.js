import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "../global"

const Showcase = () => {
  const data = useStaticQuery(graphql`
  query {
    file(sourceInstanceName: { eq: "product" }, name: { eq: "showcase1" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
return (
  <Section id="showcase">
    <StyledContainer>
      <Subtitle>Latest collection of quotes images created using our quote maker. Browse our gallery for more images</Subtitle>
      <SectionTitle>Showcase</SectionTitle>
      <ShowcaseGrid>
        <ShowcaseItem>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <ShowcaseText>
          From Walter Chrysler 
          </ShowcaseText>
          <Link to="/app/"><HeaderButton>Redesign</HeaderButton></Link>
        </ShowcaseItem>
        <ShowcaseItem>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <ShowcaseText>
          From Confucius
          </ShowcaseText>
          <Link to="/app/"><HeaderButton>Redesign</HeaderButton></Link>
        </ShowcaseItem>
        <ShowcaseItem>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <ShowcaseText>
          From John De Paola
          </ShowcaseText>
          <Link to="/app/"><HeaderButton>Redesign</HeaderButton></Link>
        </ShowcaseItem>
        <ShowcaseItem>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <ShowcaseText>
          From wise man
          </ShowcaseText>
          <Link to="/app/"><HeaderButton>Redesign</HeaderButton></Link>
        </ShowcaseItem>
        <ShowcaseItem>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <ShowcaseText>From Russian proverb</ShowcaseText>
          <Link to="/app/"><HeaderButton>Redesign</HeaderButton></Link>
        </ShowcaseItem>
        <ShowcaseItem>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <ShowcaseText>
          From Rabindranath Tagore
          </ShowcaseText>
          <Link to="/app/"><HeaderButton>Redesign</HeaderButton></Link>
        </ShowcaseItem>
      </ShowcaseGrid>
    </StyledContainer>
  </Section>
  )
}
export default Showcase

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  margin: 0px auto;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const ShowcaseItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`


const ShowcaseText = styled.p`
  text-align: center;
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 170px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 170px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 170px;
  }
`

const HeaderButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #333;
  letter-spacing: 1px;
  height: 30px;
  display: block;
  margin:0 auto;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: #fff;
  border-radius: 50px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: #333;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`