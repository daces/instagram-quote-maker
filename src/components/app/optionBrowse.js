import React from "react"
import styled from "styled-components"
const OptionBrowse = () => {
  return (
    <OBContainer>
      <OBItem>
        <OBItemGrid>
          <OBItemGridItem>
            <OBSectionText>Image:</OBSectionText>
          </OBItemGridItem>
          <OBItemGridItem>
            <OBSectionInput placeholder="Select image from URL"></OBSectionInput>
          </OBItemGridItem>
        </OBItemGrid>
        <OBItemGrid>
          <OBItemGridItem>
            <OBSectionText>Upload Image:</OBSectionText>
          </OBItemGridItem>
          <OBItemGridItem>
            <OBSectionInput placeholder="Upload image from your computer"></OBSectionInput>
          </OBItemGridItem>
        </OBItemGrid>
        <OBItemGrid>
          <OBItemGridItem>
            <OBSectionText>Search Images:</OBSectionText>
          </OBItemGridItem>
          <OBItemGridItem>
            <OBSectionInput placeholder="Select images from unsplash,com"></OBSectionInput>
          </OBItemGridItem>
        </OBItemGrid>
      </OBItem>
    </OBContainer>
  )
}

export default OptionBrowse

const OBContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px auto;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
  background: #f1f1f1;
  height: 400px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 10px;
  }
`
const OBItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`
const OBItemGrid = styled.div`
  display: grid;
  margin-top: 15px;
  grid-template-columns: 30% 70%;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: 30% 70%;
  }
`
const OBItemGridItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`
const OBSectionText = styled.p`
  display: inline-block;
  margin-right: 15px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Helvetica";
`
const OBSectionInput = styled.input`
  width: 100%;
  border-radius: 10px 10px 0 0;
  border: none;
  padding: 12px;
  font-size: 14px;
  outline: red;
`
