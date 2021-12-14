import styled from "styled-components"

export const ContainerMain = styled.div`
height: 451vh;
float: left;
width: 100%;
margin: 0 0 50px;
@media (max-width: 845px) {
  height: 467vh;
}
`

export const ContainerFv = styled.div`
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
@media (max-width: 425px) {
  margin-left: 9.4vw;
}
@media (max-width: 375px) {
  margin-left: 11.3vw;
}
@media (max-width: 320px) {
  margin-left: 13.3vw;
}
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