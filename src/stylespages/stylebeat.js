import styled from "styled-components"

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 10vh;
width: 100%;
background-color: #fff;
border-bottom: 1px solid #f0f0f0;
`

export const ContainerLogo = styled.div`
display: flex;
width: 100%;
margin-left: 10vw;
`

export const ButtonLogo = styled.h1`
cursor: pointer;
font-size: 35px;
`

export const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
width: 60%;
margin-right: 10vw;
font-size: 14px;
`

export const ContainerFv = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
width: 728px;
height: 120vh;
margin-left: 23vw;
padding-top: 7vh;
`

export const PostInfoFv = styled.div`
position: relative;
height: 30px;
font-size: 14px;
font-weight: 400;
text-transform: uppercase;
margin: 0 0 20px;
margin-bottom: 10vh;
`

export const InfoFeatured = styled.h3`
position: relative;
height: 30px;
font-size: 14px;
font-weight: 400;
text-transform: uppercase;
margin: 0 0 20px;
`

export const ContainerImg = styled.div`
float: left;
width: 100%;
height: 420px;
overflow: hidden;
margin: 0 0 25px;
border-radius: 3px;
border: 1px solid black;
`

export const ImgBeat = styled.img`
opacity: 1;
max-width: 100%;
`

export const ContainerTitle = styled.div`
float: left;
overflow: hidden;
`

export const InfoTitle = styled.a`
font-size: 13px;
color: #aaa;
font-weight: 400;
text-transform: uppercase;
`

export const Title = styled.h2`
font-size: 31px;
font-weight: 700;
line-height: 1.4em;
text-decoration: none;
`

export const ContainerSubtitle = styled.div`
float: left;
overflow: hidden;
`

export const Subtitle = styled.p`
position: relative;
display: block;
overflow: hidden;
font-size: 15px;
color: #888;
line-height: 1.6em;
font-weight: 400;
margin: 10px 0 0;
padding: 0 10px 0 0;
`

export const ButtonSubtitle = styled.p`
position: relative;
display: inline-block;
background-color: #5e26cd;
height: 32px;
color: #fff;
font-size: 12px;
font-weight: 400;
line-height: 32px;
text-transform: uppercase;
padding: 0 30px;
margin: 17px 0 0;
border-radius: 32px;
transition: background .17s;
cursor: pointer;
`

export const Buttons = styled.p`
cursor: pointer;
`