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
width: 60%;
margin-right: 10vw;
font-size: 14px;
`

export const Buttons = styled.p`
cursor: pointer;
`

export const ButtonLogo = styled.h1`
cursor: pointer;
font-size: 35px;
`

export const ContainerProfile = styled.div`
position: relative;
overflow: hidden;
background-color: #161619;
height: 60vh;
width: 100%;
box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 6%), inset 0 -1px 0 0 rgb(0 0 0 / 6%);
background-image: url(${props => props.backgroundImage});
background-size: 100%;
background-repeat: no-repeat;
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