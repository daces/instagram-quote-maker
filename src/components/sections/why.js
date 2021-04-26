import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "../global"

const Why = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "product" }
        name: { eq: "privacy-protected" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Section id="why">
      <StyledContainer>
        <Subtitle>
          Latest collection of quotes images created using our quote maker.
          Browse our gallery for more images
        </Subtitle>
        <SectionTitle>Why</SectionTitle>
        <WhyGrid>
          <WhyItem>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <WhyTitle>It is so fast and private.</WhyTitle>
            <WhyText>
              When you design using our quote maker, all process like text
              input, image upload, and any graphical computation is 100% done on
              your own computer or phone browser. This means when you input a
              text, upload photos, or saving themes on our quote editor the data
              does not send or saved to our server. It is computed and saved on
              your own browser. Once again, NO data sent to our server. With
              this unique approach, you will get a faster image processing, an
              instant download, and the best of all, your privacy is protected.
              We don't know what you type, what images you upload, or anything
              you do. All is done on your device's browser.
            </WhyText>
          </WhyItem>
          <WhyItem>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <WhyTitle>It is so fast and private.</WhyTitle>
            <WhyText>
              When you design using our quote maker, all process like text
              input, image upload, and any graphical computation is 100% done on
              your own computer or phone browser. This means when you input a
              text, upload photos, or saving themes on our quote editor the data
              does not send or saved to our server. It is computed and saved on
              your own browser. Once again, NO data sent to our server. With
              this unique approach, you will get a faster image processing, an
              instant download, and the best of all, your privacy is protected.
              We don't know what you type, what images you upload, or anything
              you do. All is done on your device's browser.
            </WhyText>
          </WhyItem>
          <WhyItem>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <WhyTitle>It is so fast and private.</WhyTitle>
            <WhyText>
              When you design using our quote maker, all process like text
              input, image upload, and any graphical computation is 100% done on
              your own computer or phone browser. This means when you input a
              text, upload photos, or saving themes on our quote editor the data
              does not send or saved to our server. It is computed and saved on
              your own browser. Once again, NO data sent to our server. With
              this unique approach, you will get a faster image processing, an
              instant download, and the best of all, your privacy is protected.
              We don't know what you type, what images you upload, or anything
              you do. All is done on your device's browser.
            </WhyText>
          </WhyItem>
          <WhyItem>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <WhyTitle>It is so fast and private.</WhyTitle>
            <WhyText>
              When you design using our quote maker, all process like text
              input, image upload, and any graphical computation is 100% done on
              your own computer or phone browser. This means when you input a
              text, upload photos, or saving themes on our quote editor the data
              does not send or saved to our server. It is computed and saved on
              your own browser. Once again, NO data sent to our server. With
              this unique approach, you will get a faster image processing, an
              instant download, and the best of all, your privacy is protected.
              We don't know what you type, what images you upload, or anything
              you do. All is done on your device's browser.
            </WhyText>
          </WhyItem>
          <WhyItem>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <WhyTitle>It is so fast and private.</WhyTitle>
            <WhyText>
              When you design using our quote maker, all process like text
              input, image upload, and any graphical computation is 100% done on
              your own computer or phone browser. This means when you input a
              text, upload photos, or saving themes on our quote editor the data
              does not send or saved to our server. It is computed and saved on
              your own browser. Once again, NO data sent to our server. With
              this unique approach, you will get a faster image processing, an
              instant download, and the best of all, your privacy is protected.
              We don't know what you type, what images you upload, or anything
              you do. All is done on your device's browser.
            </WhyText>
          </WhyItem>
          <WhyItem>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <WhyTitle>It is so fast and private.</WhyTitle>
            <WhyText>
              When you design using our quote maker, all process like text
              input, image upload, and any graphical computation is 100% done on
              your own computer or phone browser. This means when you input a
              text, upload photos, or saving themes on our quote editor the data
              does not send or saved to our server. It is computed and saved on
              your own browser. Once again, NO data sent to our server. With
              this unique approach, you will get a faster image processing, an
              instant download, and the best of all, your privacy is protected.
              We don't know what you type, what images you upload, or anything
              you do. All is done on your device's browser.
            </WhyText>
          </WhyItem>
        </WhyGrid>
      </StyledContainer>
    </Section>
  )
}
export default Why

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`

const WhyItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
`

const WhyTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  
  padding 0 40px;
  margin-bottom: 10px;
`

const WhyText = styled.p`
  text-align: left;
  padding 0 40px;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  justify-self: end;
  align-self: flex-start;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)``
