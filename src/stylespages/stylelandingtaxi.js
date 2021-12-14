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
@media (max-width: 750px) {
  margin-left: 7.2vw;
}
@media (max-width: 740px) {
  margin-left: 6.8vw;
}
@media (max-width: 710px) {
  margin-left: 7.3vw;
}
@media (max-width: 695px) {
  margin-left: 7vw;
}
@media (max-width: 685px) {
  margin-left: 7.5vw;
}
@media (max-width: 680px) {
  margin-left: 7.7vw;
}
@media (max-width: 675px) {
  margin-left: 7.4vw;
}
@media (max-width: 670px) {
  margin-left: 7vw;
}
@media (max-width: 665px) {
  margin-left: 7.5vw;
}
@media (max-width: 655px) {
  margin-left: 7vw;
}
@media (max-width: 640px) {
  margin-left: 6.7vw;
}
@media (max-width: 630px) {
  margin-left: 7.2vw;
}
@media (max-width: 610px) {
  margin-left: 6.8vw;
}
@media (max-width: 605px) {
  margin-left: 7.6vw;
}
@media (max-width: 590px) {
  margin-left: 8.1vw;
}
@media (max-width: 580px) {
  margin-left: 7.4vw;
}
@media (max-width: 580px) {
  margin-left: 7vw;
}
@media (max-width: 565px) {
  margin-left: 7.6vw;
}
@media (max-width: 560px) {
  margin-left: 7.2vw;
}
@media (max-width: 555px) {
  margin-left: 8vw;
}
@media (max-width: 540px) {
  margin-left: 7.2vw;
}
@media (max-width: 525px) {
  margin-left: 8.3vw;
}
@media (max-width: 515px) {
  margin-left: 7.1vw;
}
@media (max-width: 505px) {
  margin-left: 8.5vw;
}
@media (max-width: 490px) {
  margin-left: 7.3vw;
}
@media (max-width: 485px) {
  margin-left: 7.9vw;
}
@media (max-width: 480px) {
  margin-left: 8.8vw;
}
@media (max-width: 455px) {
  margin-left: 9.3vw;
}
@media (max-width: 440px) {
  margin-left: 8.5vw;
}
@media (max-width: 435px) {
  margin-left: 8.2vw;
}
@media (max-width: 430px) {
  margin-left: 9.6vw;
  margin-top: 3vh;
  margin-bottom: 1vh;
}
@media (max-width: 427px) {
  margin-left: 10.2vw;
  margin-top: 3vh;
  margin-bottom: 2vh;
}
@media (max-width: 426px) {
  margin-left: 10.2vw;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
@media (max-width: 425px) {
  margin-left: 11.4vw;
  margin-top: 3vh;
  margin-bottom: 4vh;
}
@media (max-width: 410px) {
  margin-left: 9.4vw;
  margin-top: 9vh;
}
@media (max-width: 395px) {
  margin-left: 11.3vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
@media (max-width: 380px) {
  margin-left: 11.3vw;
  margin-top: 12vh;
  margin-bottom: 13vh;
}
@media (max-width: 375px) {
  margin-left: 11.3vw;
  margin-top: 13vh;
  margin-bottom: 15vh;
}
@media (max-width: 365px) {
  margin-left: 15.2vw;
  margin-top: 21vh;
  margin-bottom: 20vh;
}
@media (max-width: 345px) {
  margin-left: 12.9vw;
  margin-top: 24vh;
  margin-bottom: 23vh;
}
@media (max-width: 335px) {
  margin-left: 12.1vw;
  margin-top: 26vh;
  margin-bottom: 26vh;
}
@media (max-width: 325px) {
  margin-left: 12.3vw;
  margin-top: 28vh;
  margin-bottom: 29vh;
}
@media (max-width: 320px) {
  margin-left: 13.3vw;
  margin-top: 32vh;
  margin-bottom: 32vh;
}
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

export const ImgTaxi = styled.img`
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