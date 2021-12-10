import styled from "styled-components"

export const ContainerContact = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
justify-content: flex-start;
height: 90vh;
width: 728px;
margin-left: 23vw;
padding-top: 13vh;
`

export const ContainerTitle = styled.div`
padding-bottom: 10vh;
`

export const ContainerInput = styled.div`

`

export const InputContact = styled.input`
height: 7vh;
width: 47.7%;
flex-wrap: wrap;
margin: 0.7vh;
border: 1px solid #eee;
border-radius: 3px;
&:nth-child(3) {
    width: 96.6%;
    height: 25vh;
 }
`

export const ContainerButton = styled.div`
margin-top: 1vh;
`

export const ButtonLogo = styled.h1`
cursor: pointer;
font-size: 35px;
`

export const InputButton = styled.button`
width: 97.3%;
height: 8vh;
background-color: #27ae60;
border: none;
color: #fff;
border-radius: 2px;
`

export const Buttons = styled.p`
cursor: pointer;
`

export const ContainerSocial = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
height: 50vh;
`

export const ContainerInfos = styled.div`
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