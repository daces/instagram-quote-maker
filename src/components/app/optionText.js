import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import CustomColorPicker from "../app/customColorPicker"
import { CTextArea } from "../app/components"

const OptionText = () => {
  const data = useStaticQuery(graphql`
    query {
      b: file(relativePath: { eq: "b.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i: file(relativePath: { eq: "i.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      t: file(relativePath: { eq: "t.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leftAlign: file(relativePath: { eq: "left-align.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      center: file(relativePath: { eq: "center.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightAlign: file(relativePath: { eq: "right-align.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <TextContainer>
      <TextSectionTitle>Quote:</TextSectionTitle>
      <CTextArea placeholder="Quote ex: I've never seen a smiling face that was not beautiful."></CTextArea>
      <TextSectionControls>
        <TextSectionTextControls>
          <ImageWrapper>
            <StyledImage fluid={data.b.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.i.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.t.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.leftAlign.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.center.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.rightAlign.childImageSharp.fluid} />
          </ImageWrapper>
        </TextSectionTextControls>

        <TextSectionColorControls>
          <ControlItem>
            <TextControlsTitle>Text color: </TextControlsTitle>
            <CustomColorPicker />
          </ControlItem>
          <ControlItem>
            <TextControlsTitle>Highlight color: </TextControlsTitle>
            <CustomColorPicker />
          </ControlItem>
        </TextSectionColorControls>
      </TextSectionControls>

      <TextSectionTitle>Author:</TextSectionTitle>
      <CTextArea placeholder="Author: Gonzalez Fernandes Miguel"></CTextArea>
      <TextSectionControls>
        <TextSectionTextControls>
          <ImageWrapper>
            <StyledImage fluid={data.b.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.i.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.t.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.leftAlign.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.center.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.rightAlign.childImageSharp.fluid} />
          </ImageWrapper>
        </TextSectionTextControls>

        <TextSectionColorControls>
          <ControlItem>
            <TextControlsTitle>Text color: </TextControlsTitle>
            <CustomColorPicker />
          </ControlItem>
          <ControlItem>
            <TextControlsTitle>Highlight color: </TextControlsTitle>
            <CustomColorPicker />
          </ControlItem>
        </TextSectionColorControls>
      </TextSectionControls>
      <TextSectionTitle>Branding:</TextSectionTitle>
      <CTextArea placeholder="@branding @twitter @pinterest @youtuve.com"></CTextArea>
      <TextSectionControls>
        <TextSectionTextControls>
          <ImageWrapper>
            <StyledImage fluid={data.b.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.i.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.t.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.leftAlign.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.center.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.rightAlign.childImageSharp.fluid} />
          </ImageWrapper>
        </TextSectionTextControls>

        <TextSectionColorControls>
          <ControlItem>
            <TextControlsTitle>Text color: </TextControlsTitle>
            <CustomColorPicker />
          </ControlItem>
          <ControlItem>
            <TextControlsTitle>Highlight color: </TextControlsTitle>
            <CustomColorPicker />
          </ControlItem>
        </TextSectionColorControls>
      </TextSectionControls>
    </TextContainer>
  )
}

export default OptionText

const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
`
const TextSectionTitle = styled.p`
  display: inline-block;
  margin-right: 15px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Helvetica";
`
const TextControlsTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  display: inline-block;
  margin: 5px;
`

const TextSectionControls = styled.div`
  background: #e6e6e6;
  padding: 5px 10px;
`
const ControlItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-end;
`
const TextSectionTextControls = styled.div``
const TextSectionColorControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  padding: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
`

const ImageWrapper = styled.div`
  display: inline-block;
`
const StyledImage = styled(Img)`
  width: 22.6px;
  display: inline-block;
`
