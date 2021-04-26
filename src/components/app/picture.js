import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { DefButton } from "../app/components"
import { BlockPicker } from "react-color"

const Picture = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "photo-app.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <MenuContainer>
      <ButtonWrap>
        <PDefButton>
          Generate
          <br />
          Fonts
        </PDefButton>
        <PDefButton>
          Generate
          <br />
          Backgrounds
        </PDefButton>
        <PDefButton>
          Generate
          <br />
          Design
        </PDefButton>
      </ButtonWrap>
      <MenuItem>
        <ImageWrapper>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
          <StyledText></StyledText>
        </ImageWrapper>
        <Credits>
          Image by:<i>Dragan</i>
        </Credits>
        <Credits>
          Font by:<i>Adriana</i>
        </Credits>
        <Credits>
          Quote by:<i>Aristotle</i>
        </Credits>
      </MenuItem>
    </MenuContainer>
  )
}
export default Picture

const MenuContainer = styled.div`
  text-align: center;
  border-radius: 22px 22px 0 0;
  width: 100%;
  display: grid;
`
const MenuItem = styled.div`
  text-align: center;
  display: inline-block;
  margin: 0 5px;
  padding-bottom: 10px;
  order: 1;
`
const ButtonWrap = styled.div`
  order: 2;
`
const ImageWrapper = styled.div`
  padding: 5px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 22px;
`
const StyledImage = styled(Img)`
  width: 100%;
  box-shadow: -2px 5px 20px 1px #848484;
`

const StyledText = styled.p`
  text-align: center;
  font-size: 10px;
  margin: 5px;
  text-transform: uppercase;
`

const PDefButton = styled(DefButton)`
  font-weight: normal;
  padding: 0 25px;
  background: #673ab7;
  background: linear-gradient(161deg, #673ab7 20%, #9c27b0 100%);
  &:hover {
    background: linear-gradient(161deg, #9c27b0 20%, #673ab7 100%);
  }
`

const Credits = styled.span`
  margin-right: 20px;
  font-size: 12px;
`
