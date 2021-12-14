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

export const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin-right: 10vw;
font-size: 14px;
@media (max-width: 500px) {
  font-size: 16px;
}
@media (max-width: 450px) {
  font-size: 18px;
}
`

export const Buttons = styled.p`
cursor: pointer;
`

export const ButtonLogo = styled.h1`
cursor: pointer;
font-size: 35px;
@media (max-width: 500px) {
  font-size: 37px;
}
@media (max-width: 450px) {
  font-size: 37px;
}
`

export const ContainerContact = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
justify-content: flex-start;
height: 90vh;
width: 728px;
margin-left: 23vw;
padding-top: 13vh;
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
@media (max-width: 1000px) {
margin-left: 13.5vw;
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
@media (max-width: 915px) {
margin-left: 9.9vw;
}
@media (max-width: 900px) {
margin-left: 8.9vw;
}
@media (max-width: 880px) {
margin-left: 8.3vw;
}
@media (max-width: 870px) {
margin-left: 7vw;
}
@media (max-width: 855px) {
margin-left: 6.9vw;
}
@media (max-width: 850px) {
margin-left: 7.1vw;
}
@media (max-width: 845px) {
margin-left: 8.6vw;
width: 700px;
}
@media (max-width: 835px) {
margin-left: 7.9vw;
}
@media (max-width: 820px) {
margin-left: 8.9vw;
width: 680px;
}
@media (max-width: 810px) {
margin-left: 8.8vw;
}
@media (max-width: 815px) {
margin-left: 8.4vw;
}
@media (max-width: 800px) {
margin-left: 7.6vw;
}
@media (max-width: 785px) {
margin-left: 6.8vw;
}
@media (max-width: 780px) {
margin-left: 5.1vw;
}
@media (max-width: 775px) {
margin-left: 6vw;
}
@media (max-width: 770px) {
margin-left: 6vw;
}
@media (max-width: 768px) {
margin-left: 5.4vw;
}
@media (max-width: 765px) {
margin-left: 5.7vw;
}
@media (max-width: 760px) {
margin-left: 6.7vw;
width: 660px;
}
@media (max-width: 755px) {
margin-left: 6.3vw;
}
@media (max-width: 515px) {
  padding-bottom: 90vh;
}
@media (max-width: 480px) {
  padding-bottom: 105vh;
}
@media (max-width: 455px) {
  padding-top: 20vh;
}
@media (max-width: 430px) {
  padding-bottom: 115vh;
  padding-top: 25vh;
}
@media (max-width: 425px) {
padding-bottom: 115vh;
padding-top: 25vh;
}
@media (max-width: 385px) {
  padding-bottom: 130vh;
  padding-top: 35vh;
}
@media (max-width: 375px) {
  padding-bottom: 135vh;
  padding-top: 40vh;
}
@media (max-width: 360px) {
  padding-bottom: 140vh;
  padding-top: 45vh;
}
@media (max-width: 320px) {
  padding-bottom: 145vh;
  padding-top: 50vh;
}
`

export const ContainerTitle = styled.div`
width: 100%;
padding-bottom: 10vh;
`

export const ContainerButton = styled.div`
width: 100%;
margin-top: 1vh;
@media (max-width: 500px) {
    font-size: 16px;
}
@media (max-width: 450px) {
    font-size: 18px;
}
`

export const ContainerSocial = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
height: 50vh;
width: 100%;
`

export const ContainerInfos = styled.div`
width: 100%;
margin-bottom: 5vh
`

export const ParagraphInfo = styled.a`
cursor: pointer;
text-decoration: none;
color: #000;
&:hover {
    color: #5e26cd;
    font-size: 16.8px;
}
`

export const Title = styled.h1`
`

export const SubTitle = styled.h2`
`