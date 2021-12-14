import styled from "styled-components"

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 10vh;
width: 100%;
background-color: #fff;
border-bottom: 1px solid #f0f0f0;
@media (max-width: 745px) {
  width: 102vw;
}
@media (max-width: 735px) {
  width: 103vw;
}
@media (max-width: 725px) {
  width: 104vw;
}
@media (max-width: 715px) {
  width: 106vw;
}
@media (max-width: 710px) {
  width: 107vw;
}
@media (max-width: 700px) {
  width: 108vw;
}
@media (max-width: 690px) {
  width: 109vw;
}
@media (max-width: 685px) {
  width: 111vw;
}
@media (max-width: 680px) {
  width: 112vw;
}
@media (max-width: 665px) {
  width: 114vw;
}
@media (max-width: 650px) {
  width: 116vw;
}
@media (max-width: 635px) {
  width: 118vw;
}
@media (max-width: 630px) {
  width: 119vw;
}
@media (max-width: 620px) {
  width: 120vw;
}
@media (max-width: 615px) {
  width: 121vw;
}
@media (max-width: 610px) {
  width: 121vw;
}
@media (max-width: 607px) {
  width: 122vw;
}
@media (max-width: 605px) {
  width: 124vw;
}
@media (max-width: 595px) {
  width: 126vw;
}
@media (max-width: 590px) {
  width: 128vw;
}
@media (max-width: 570px) {
  width: 130vw;
}
@media (max-width: 567px) {
  width: 130vw;
}
@media (max-width: 565px) {
  width: 132vw;
}
@media (max-width: 555px) {
  width: 135vw;
}
@media (max-width: 545px) {
  width: 136vw;
}
@media (max-width: 540px) {
  width: 136vw;
}
@media (max-width: 535px) {
  width: 137vw;
}
@media (max-width: 534px) {
  width: 139vw;
}
@media (max-width: 530px) {
  width: 139vw;
}
@media (max-width: 525px) {
  width: 142vw;
}
@media (max-width: 514px) {
  width: 143vw;
}
@media (max-width: 510px) {
  width: 144vw;
}
@media (max-width: 505px) {
  width: 148vw;
}
@media (max-width: 503px) {
  width: 149vw;
}
@media (max-width: 500px) {
  width: 149vw;
}
@media (max-width: 485px) {
  width: 152vw;
}
@media (max-width: 483px) {
  width: 153vw;
}
@media (max-width: 480px) {
  width: 155vw;
}
@media (max-width: 470px) {
  width: 158vw;
}
@media (max-width: 465px) {
  width: 160vw;
}
@media (max-width: 455px) {
  width: 163vw;
}
@media (max-width: 450px) {
  width: 165vw;
}
@media (max-width: 445px) {
  width: 167vw;
}
@media (max-width: 435px) {
  width: 168vw;
}
@media (max-width: 430px) {
  width: 173vw;
}
@media (max-width: 427px) {
  width: 175vw;
}
@media (max-width: 425px) {
  width: 177vw;
}
@media (max-width: 415px) {
  width: 177vw;
}
@media (max-width: 410px) {
  width: 180vw;
}
@media (max-width: 405px) {
  width: 182vw;
}
@media (max-width: 395px) {
  width: 190vw;
}
@media (max-width: 380px) {
  width: 195vw;
}
@media (max-width: 375px) {
  width: 198vw;
}
@media (max-width: 370px) {
  width: 198vw;
}
@media (max-width: 365px) {
  width: 210vw;
}
@media (max-width: 345px) {
  width: 217vw;
}
@media (max-width: 335px) {
  width: 222vw;
}
@media (max-width: 325px) {
  width: 227vw;
}
@media (max-width: 320px) {
  width: 234vw;
}
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

export const ContainerProfile = styled.div`
display: flex;
align-items: center;
flex-direction: column;
position: relative;
overflow: hidden;
background-color: #161619;
height: 60vh;
width: 100%;
box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 6%), inset 0 -1px 0 0 rgb(0 0 0 / 6%);
background-image: url(${props => props.backgroundImage});
background-size: 100%;
background-repeat: no-repeat;
@media (max-width: 940px) {
  width: 102vw;
}
@media (max-width: 745px) {
  width: 102vw;
}
@media (max-width: 735px) {
  width: 103vw;
}
@media (max-width: 725px) {
  width: 104vw;
}
@media (max-width: 715px) {
  width: 106vw;
}
@media (max-width: 710px) {
  width: 107vw;
}
@media (max-width: 700px) {
  width: 108vw;
}
@media (max-width: 690px) {
  width: 109vw;
}
@media (max-width: 685px) {
  width: 111vw;
}
@media (max-width: 680px) {
  width: 112vw;
}
@media (max-width: 665px) {
  width: 114vw;
}
@media (max-width: 650px) {
  width: 116vw;
}
@media (max-width: 635px) {
  width: 118vw;
}
@media (max-width: 630px) {
  width: 119vw;
}
@media (max-width: 620px) {
  width: 120vw;
}
@media (max-width: 615px) {
  width: 121vw;
}
@media (max-width: 610px) {
  width: 121vw;
}
@media (max-width: 607px) {
  width: 122vw;
}
@media (max-width: 605px) {
  width: 124vw;
}
@media (max-width: 595px) {
  width: 126vw;
}
@media (max-width: 590px) {
  width: 128vw;
}
@media (max-width: 570px) {
  width: 130vw;
}
@media (max-width: 567px) {
  width: 130vw;
}
@media (max-width: 565px) {
  width: 132vw;
}
@media (max-width: 555px) {
  width: 135vw;
}
@media (max-width: 545px) {
  width: 136vw;
}
@media (max-width: 540px) {
  width: 136vw;
}
@media (max-width: 535px) {
  width: 137vw;
}
@media (max-width: 534px) {
  width: 139vw;
}
@media (max-width: 530px) {
  width: 139vw;
}
@media (max-width: 525px) {
  width: 142vw;
}
@media (max-width: 514px) {
  width: 143vw;
}
@media (max-width: 510px) {
  width: 144vw;
}
@media (max-width: 505px) {
  width: 148vw;
}
@media (max-width: 503px) {
  width: 149vw;
}
@media (max-width: 500px) {
  width: 149vw;
}
@media (max-width: 485px) {
  width: 152vw;
}
@media (max-width: 483px) {
  width: 153vw;
}
@media (max-width: 480px) {
  width: 155vw;
}
@media (max-width: 470px) {
  width: 158vw;
}
@media (max-width: 465px) {
  width: 160vw;
}
@media (max-width: 455px) {
  width: 163vw;
}
@media (max-width: 450px) {
  width: 165vw;
}
@media (max-width: 445px) {
  width: 167vw;
}
@media (max-width: 435px) {
  width: 168vw;
}
@media (max-width: 430px) {
  width: 173vw;
}
@media (max-width: 427px) {
  width: 175vw;
}
@media (max-width: 425px) {
  width: 177vw;
}
@media (max-width: 415px) {
  width: 177vw;
}
@media (max-width: 410px) {
  width: 180vw;
}
@media (max-width: 405px) {
  width: 182vw;
}
@media (max-width: 395px) {
  width: 190vw;
}
@media (max-width: 380px) {
  width: 195vw;
}
@media (max-width: 375px) {
  width: 198vw;
}
@media (max-width: 370px) {
  width: 198vw;
}
@media (max-width: 365px) {
  width: 210vw;
}
@media (max-width: 345px) {
  width: 217vw;
}
@media (max-width: 335px) {
  width: 222vw;
}
@media (max-width: 325px) {
  width: 227vw;
}
@media (max-width: 320px) {
  width: 234vw;
}
`

export const ContainerAuthor = styled.div`
text-align: center;
margin: 0 auto;
`

export const Avatar = styled.div`
overflow: hidden;
width: 140px;
height: 140px;
background-color: #fff;
display: inline-block;
padding: 5px;
margin: 10vh 0 40px;
border-radius: 100%;
box-shadow: 0 0 0 7px rgb(255 255 255 / 5%);
`

export const ImageAvatar = styled.img`
opacity: 1;
border-radius: 100%;
color: #fff;
transition: opacity .17s ease;
max-width: 100%;
`

export const ImageButtons = styled.img`
height: 3.1vh;
margin-top: 1.21vh;
margin-left: 0.21vh;
@media (max-width: 1366px) {
  margin-left: 0.12vh;
}
@media (max-width: 1280px) {
  margin-left: 0.13vh;
}
`

export const LinkRedes = styled.a`
`

export const ContainerContact = styled.div`
margin-top: 6vh;
`

export const ContainerSocial = styled.ul`
text-align: center;
margin: 0 auto;
`

export const BoxSocial = styled.li`
display: inline-block;
margin: 0 7px;
`

export const Social = styled.a`
display: block;
background-color: #161619;
width: 36px;
height: 36px;
background-color: #fff;
color: #000;
font-size: 17px;
line-height: 36px;
border-radius: 100%;
transition: all .17s ease;
cursor: pointer;
&:hover {
    background-color: #5e26cd;
  }
`