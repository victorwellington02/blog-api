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
width: 100%;
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
@media (max-width: 1280px) {
  margin-left: 21vw;
}
@media (max-width: 1240px) {
margin-left: 19.8vw;
}
@media (max-width: 1200px) {
margin-left: 19.3vw;
}
@media (max-width: 1170px) {
margin-left: 18.9vw;
}
@media (max-width: 1150px) {
margin-left: 18.1vw;
}
@media (max-width: 1110px) {
margin-left: 17.2vw;
}
@media (max-width: 1070px) {
margin-left: 16.5vw;
}
@media (max-width: 1050px) {
margin-left: 16.2vw;
}
@media (max-width: 1024px) {
margin-left: 15.2vw;
}
@media (max-width: 1010px) {
margin-left: 14.2vw;
}
@media (max-width: 985px) {
margin-left: 13.2vw;
}
@media (max-width: 945px) {
margin-left: 11.8vw;
}
@media (max-width: 920px) {
margin-left: 10.8vw;
}
@media (max-width: 900px) {
margin-left: 9.4vw;
}
@media (max-width: 870px) {
margin-left: 8.2vw;
}
@media (max-width: 850px) {
margin-left: 7.3vw;
}
@media (max-width: 845px) {
margin-left: 8.6vw;
width: 700px;
}
@media (max-width: 835px) {
margin-left: 6.3vw;
}
@media (max-width: 820px) {
margin-left: 8.9vw;
width: 680px;
}
@media (max-width: 815px) {
margin-left: 5.3vw;
}
@media (max-width: 800px) {
margin-left: 4.4vw;
}
@media (max-width: 785px) {
margin-left: 3.8vw;
}
@media (max-width: 765px) {
margin-left: 3.3vw;
}
@media (max-width: 760px) {
margin-left: 6.7vw;
width: 660px;
}
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
@media (max-width: 1280px) {
  margin-left: 21vw;
}
@media (max-width: 1240px) {
margin-left: 19.8vw;
}
@media (max-width: 1200px) {
margin-left: 19.3vw;
}
@media (max-width: 1170px) {
margin-left: 18.9vw;
}
@media (max-width: 1150px) {
margin-left: 18.1vw;
}
@media (max-width: 1110px) {
margin-left: 17.2vw;
}
@media (max-width: 1070px) {
margin-left: 16.5vw;
}
@media (max-width: 1050px) {
margin-left: 16.2vw;
}
@media (max-width: 1024px) {
margin-left: 15.2vw;
}
@media (max-width: 1010px) {
margin-left: 14.2vw;
}
@media (max-width: 985px) {
  margin-left: 13.2vw;
}
@media (max-width: 945px) {
  margin-left: 11.8vw;
}
@media (max-width: 920px) {
  margin-left: 10.8vw;
}
@media (max-width: 900px) {
  margin-left: 9.4vw;
}
@media (max-width: 870px) {
  margin-left: 8.2vw;
}
@media (max-width: 850px) {
  margin-left: 7.3vw;
}
@media (max-width: 845px) {
  margin-left: 8.6vw;
  width: 700px;
}
@media (max-width: 835px) {
  margin-left: 6.3vw;
}
@media (max-width: 820px) {
  margin-left: 8.9vw;
  width: 680px;
}
@media (max-width: 815px) {
  margin-left: 5.3vw;
}
@media (max-width: 800px) {
  margin-left: 4.4vw;
}
@media (max-width: 785px) {
  margin-left: 3.8vw;
}
@media (max-width: 765px) {
  margin-left: 3.3vw;
}
@media (max-width: 760px) {
  margin-left: 6.7vw;
  width: 660px;
}
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