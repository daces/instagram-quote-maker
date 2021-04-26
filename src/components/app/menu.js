import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import OptionBrowse from "../app/optionBrowse"
import OptionText from "../app/optionText"
import OptionGradient from "../app/optionGradient"

const Menu = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      text: file(relativePath: { eq: "text.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      gradient: file(relativePath: { eq: "gradient.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const [activeTab, setActiveTab] = useState(0)
  const [tab1, setTab1] = useState("")
  const [tab2, setTab2] = useState("")
  const [tab3, setTab3] = useState("")
  function setTab(e, currentTab) {
    setActiveTab(currentTab)

    switch (currentTab) {
      case 0:
        setTab1("active")
        setTab2(" ")
        setTab3(" ")
        break
      case 1:
        setTab1(" ")
        setTab2("active")
        setTab3("  ")
        break
      case 2:
        setTab1("")
        setTab2(" ")
        setTab3("active")
        break
      default:
        break
    }
  }

  function renderSwitch() {
    switch (activeTab) {
      case 0:
        return <OptionBrowse />
      case 1:
        return <OptionText />
      case 2:
        return <OptionGradient />
      default:
        return <OptionBrowse />
    }
  }

  return (
    <>
      <MenuContainer>
        <MenuItem
          onClick={(e) => {
            setTab(e, 0)
          }}
          className={tab1}
        >
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <StyledText>Image</StyledText>
          </ImageWrapper>
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            setTab(e, 1)
          }}
          className={tab2}
        >
          <ImageWrapper>
            <StyledImage fluid={data.text.childImageSharp.fluid} />
            <StyledText>Text</StyledText>
          </ImageWrapper>
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            setTab(e, 2)
          }}
          className={tab3}
        >
          <ImageWrapper>
            <StyledImage fluid={data.gradient.childImageSharp.fluid} />
            <StyledText>Gradient</StyledText>
          </ImageWrapper>
        </MenuItem>
      </MenuContainer>
      {renderSwitch()}
    </>
  )
}
export default Menu

const MenuContainer = styled.div`
  text-align: center;
  background: #fff;
  border-radius: 22px 22px 0 0;
  width: 100%;
`
const MenuItem = styled.button`
  z-index: 2147483647;
  display: inline-block;
  &:after {
    content: "";
    display: block;
  }
  &:hover {
    background: #e6e6e6;
  }
`

const ImageWrapper = styled.div`
  padding: 55px 25px 0 25px;
  margin-bottom: 10px;
  border-radius: 22px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 55px 15px 0 25px;
  }
`
const StyledImage = styled(Img)`
  width: 48px;
`

const StyledText = styled.p`
  text-align: center;
  font-size: 10px;
  margin: 5px;
  text-transform: uppercase;
`
