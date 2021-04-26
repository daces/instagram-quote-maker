import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CustomColorPicker from "../app/customColorPicker"
import { CSlider } from "../app/components"
const OptionGradient = () => {
  const data = useStaticQuery(graphql`
    query {
      topDown: file(relativePath: { eq: "top-down.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      downTop: file(relativePath: { eq: "down-top.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leftRight: file(relativePath: { eq: "left-right.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RightLeft: file(relativePath: { eq: "right-left.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      diagonal: file(relativePath: { eq: "diagonal.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diagonal1: file(relativePath: { eq: "diagonal-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diagonal2: file(relativePath: { eq: "diagonal-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diagonal3: file(relativePath: { eq: "diagonal-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [stateChange, setStateChange] = useState(50)
  const [stateChange1, setStateChange1] = useState(20)

  const handleChange = (event) => {
    setStateChange(event.target.value)
  }

  const handleChange1 = (event) => {
    setStateChange1(event.target.value)
  }
  return (
    <GradientContainer>
      <GradientSectionTitle>Gradient:</GradientSectionTitle>

      <GradientControls>
        <GradientColorControls>
          <ControlItemText>
            <GradientSubTitle>Color #1: </GradientSubTitle>
            <CustomColorPicker />
            <GradientSliderContainer>
              <CSlider
                value={stateChange}
                onChange={handleChange}
                type="range"
                min="1"
                max="100"
                className="slider"
                id="myRange"
              />
            </GradientSliderContainer>
          </ControlItemText>
          <ControlItemText>
            <GradientSubTitle>Color #2: </GradientSubTitle>
            <CustomColorPicker />
            <GradientSliderContainer>
              <CSlider
                value={stateChange1}
                onChange={handleChange1}
                type="range"
                min="1"
                max="100"
                className="slider1"
                id="m2yRange"
              />
            </GradientSliderContainer>
          </ControlItemText>
        </GradientColorControls>
      </GradientControls>

      <GradientSectionTitle>Gradient Direction:</GradientSectionTitle>

      <GradientControls>
        <GradientColorControls1>
          <ControlItemText>
            <GradientSubTitle>Top, Down, Left, Right </GradientSubTitle>
          </ControlItemText>
        </GradientColorControls1>
        <GradientDirectionControls>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.topDown.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.downTop.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.leftRight.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.RightLeft.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
        </GradientDirectionControls>
      </GradientControls>
      <GradientSectionTitle></GradientSectionTitle>
      <GradientControls>
        <GradientColorControls1>
          <ControlItemText>
            <GradientSubTitle>
              Diagonal: Top, Down, Left, Right{" "}
            </GradientSubTitle>
          </ControlItemText>
        </GradientColorControls1>
        <GradientDirectionControls>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.diagonal.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.diagonal1.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.diagonal2.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
          <ControlItem>
            <ImageWrapper>
              <StyledImage fluid={data.diagonal3.childImageSharp.fluid} />
            </ImageWrapper>
          </ControlItem>
        </GradientDirectionControls>
      </GradientControls>
    </GradientContainer>
  )
}

export default OptionGradient

const GradientContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
`

const GradientSectionTitle = styled.p`
  display: inline-block;
  margin-right: 15px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Helvetica";
`

const GradientSliderContainer = styled.div`
  width: 100%;
`
const GradientSubTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  margin: 5px;
`

const GradientControls = styled.div`
  background: #e6e6e6;
  padding: 5px 10px;
`
const ControlItemText = styled.div``
const ControlItem1 = styled.button`
  &:active,
  &:hover,
  &:focus {
    background: #fff;
  }
`
const ControlItem = styled.button`
  display: flex;
  &:active,
  &:hover,
  &:focus {
    background: #fff;
  }
`
const GradientColorControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  padding: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
`
const GradientColorControls1 = styled.div``
const GradientDirectionControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0px auto;
  padding: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
`
const ImageWrapper = styled.div`
  display: inline-block;
  margin: auto;
`
const StyledImage = styled(Img)`
  width: 24px;
  margin: 20px;
  display: inline-block;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin: 0;
  }
`
