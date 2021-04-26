import styled from "styled-components"


const CTextArea = styled.textarea`
padding: 10px;
border: none;
border-radius: 22px 22px 0 0;
width: 100%;
`

const CSlider = styled.input`
-webkit-appearance: none;
width: 100%;
height: 5px;
background: #d3d3d3;
outline: none;
opacity: 0.7;
-webkit-transition: .2s;
transition: opacity .2s;
  
&:hover {
opacity: 1;
}
  
&::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
width: 5px;
height: 25px;
background: #F17013;
cursor: pointer;
}

&::-moz-range-thumb  {
width: 25px;
height: 25px;
background: #F17013;
cursor: pointer;
}
`


const DefButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  ${props => props.theme.color.buttonbg};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    
    background: #FD7F18; background: linear-gradient(161deg,#fe8c00  20%, #f83600  100%); 
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

export  { CTextArea, CSlider, DefButton};