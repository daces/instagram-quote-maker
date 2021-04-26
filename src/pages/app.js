import React from "react"
import styled from "styled-components"

import Menu from "../components/app/menu.js"
import Picture from "../components/app/picture.js"

import Layout from "../components/common/layout/layout"
import { DefButton } from "../components/app/components"
const App = () => {
  return (
    <Layout>
      <LogoContainer>
        <AppTitle>
          Quote<span>Zilla</span>
        </AppTitle>
        <PDefButton>Download</PDefButton>
      </LogoContainer>
      <StyledContainer>
        <AppGrid>
          <AppItem>
            <Menu />
          </AppItem>
          <AppItem>
            <p></p>
            <Picture />
          </AppItem>
        </AppGrid>
      </StyledContainer>
    </Layout>
  )
}
export default App
const StyledContainer = styled.div`
  margin: 0;
  padding-bottom: 30px;
  background: ${(props) => props.theme.color.addition};
`
const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 0px 10px 0 auto;
  padding: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: 100%;
  }
`

const AppItem = styled.div`
  background: #f1f1f1;
  padding: 0;
  border-radius: 22px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`
const LogoContainer = styled.div`
  background: ${(props) => props.theme.color.addition};
  display: grid;
  padding: 0 30px;
  grid-template-columns: 5fr 1fr;
  justify-content: space-evenly;
  align-items: center;
`
const AppTitle = styled.h1`
  display: flex;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: -8px;
  & span {
    color: #fc6600;
    letter-spacing: -6px;
  }
`

const PDefButton = styled(DefButton)`
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 0 10px;
    height: 40px;
  }
`
