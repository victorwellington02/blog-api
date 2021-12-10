import styled from "styled-components"

export const ContainerFooter = styled.div`
display: flex;
width: 100%;
height: 32vh;
background-color: #161619;
color: #f2f2f2;
`

export const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgba(255,255,255,0.05);
overflow: hidden;
width: 100%;
padding-left: 35vw;
padding-right: 35vw;
font-size: 14px;
`

export const Buttons = styled.p`
cursor: pointer;
`

export const ContaneirCopyright = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 54px;
font-size: 12px;
line-height: 34px;
font-weight: 400;
padding: 10px 0;
background-color: #161619;
`

export const TitleCopyright = styled.a`
display: inline-block;
font-size: inherit;
color: #fff;
visibility: visible;
z-index: 99;
opacity: 1;
position: relative;
font-weight: 700;
`