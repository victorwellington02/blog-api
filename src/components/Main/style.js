import styled from "styled-components"

export const ContainerMain = styled.div`
height: 451vh;
float: left;
width: 100%;
margin: 0 0 50px;
`

export const ContainerFv = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
width: 728px;
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

export const Imgfv = styled.img`
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
margin: 0;
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
&:hover {
    background-color: #000;
  }
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

export const ImageFv = styled.img`
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

export const ContainerOlder = styled.div`
float: left;
width: 100%;
font-size: 15px;
box-sizing: border-box;
padding: 0 10px;
margin: 0 0 50px;
margin-top: 2vw;
`

export const TextOlder = styled.a`
display: inline-block;
color: #161619;
transition: color .17s ease;
float: right;
margin-right: 23vw;
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