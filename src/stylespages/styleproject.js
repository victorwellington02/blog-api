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

export const ContainerOutherProjects = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
width: 728px;
margin-left: 23vw;
padding-top: 7vh;
`

export const ContainerProjects = styled.div`
margin: 0 0 50px;
`

export const ContainerImgProjects = styled.div`
float: left;
width: 250px;
height: 180px;
overflow: hidden;
margin: 25px 25px 0 0;
border-radius: 3px;
border-bottom: 1px solid black;
border-left: 1px solid black;
`

export const ImageProjects = styled.img`
opacity: 1;
max-width: 100%;
`

export const ContainerTitleProjects = styled.div`
overflow: hidden;
`

export const ContainerInfoTitle = styled.div`
font-size: 13px;
color: #aaa;
font-weight: 400;
text-transform: uppercase;
margin: 0 0 10px;
`

export const InfoProjects = styled.a`
font-size: 13px;
color: #aaa;
font-weight: 400;
text-transform: uppercase;
margin: 0 0 10px;
`

export const TitleProjects = styled.h2`
color: #161619;
display: block;
transition: color .17s ease;
`

export const ContainerSubtitleProjects = styled.div`
overflow: hidden;
`

export const SubtitleProjects = styled.p`
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

export const ButtonProjects = styled.a`
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
&:hover {
    background-color: #000;
  }
`

export const ContainerPopularProjects = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
width: 728px;
margin-left: 23vw;
padding-top: 7vh;
`

export const PostInfoPopular = styled.div`
position: relative;
height: 30px;
font-size: 14px;
font-weight: 400;
text-transform: uppercase;
margin: 0 0 20px;
&:after {
    position: absolute;
    content: '';
    width: 60px;
    height: 0;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #5e26cd;
}
`

export const InfoPopular = styled.h3`
position: relative;
height: 30px;
font-size: 14px;
font-weight: 400;
text-transform: uppercase;
margin: 0 0 20px;
`

export const Buttons = styled.p`
cursor: pointer;
`