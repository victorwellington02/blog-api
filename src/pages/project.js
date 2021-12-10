import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/styleproject"
import styled from "styled-components";


const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const ItemHeader = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
      color: #5e26cd;
  }
`;

const ItemLogo = styled(Link)`
  text-decoration: none;
  color: #000;
`;


export default function Projects() {

    const data = useStaticQuery(graphql`
    query {
        alldata {
          projects {
              btnlogo
              btnhome
              btnabout
              btnprojects
              btncontacts
              infopopular
              infohello
              titlehello
              subtitlehello
              btnread
              infobeat
              titlebeat
              subtitlebeat
              infoflow
              titleflow
              subtitleflow
              infotodo
              titletodo
              subtitletodo
              infocompositing
              titlecompositing
              subtitlecompositing
              infocar
              titlecar
              subtitlecar
              infostrytegy
              titlestrytegy
              subtitlestrytegy
              infotaxi
              titletaxi
              subtitletaxi
              infotheme
              titletheme
              subtitletheme
              imghello {
                  url
              }
              imgbeat {
                url
            }
              imgflow {
                url
            }
              imgtodo {
                url
            }
              imgcompo {
                url
            }
              imgcar {
                url
            }
              imgstryt {
                url
            }
              imgtaxi {
                url
            }
              imgtheme {
                url
            }
            }
        }
    }
    
    
    
    `)
    
  const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, infopopular, infohello, titlehello, subtitlehello,
    btnread, infobeat, titlebeat, subtitlebeat, infoflow, titleflow, subtitleflow, infotodo, titletodo, subtitletodo, 
    infocompositing, titlecompositing, subtitlecompositing, infocar, titlecar, subtitlecar, infostrytegy, titlestrytegy,
    subtitlestrytegy, infotaxi, titletaxi, subtitletaxi, infotheme, titletheme, subtitletheme, imghello, imgbeat,
    imgflow, imgtodo, imgcompo, imgcar, imgstryt, imgtaxi, imgtheme} = data.alldata.projects[0]

    return(
        <>
        <R.ContainerHeader>
        <R.ContainerLogo>
        <S.ButtonLogo><ItemLogo to="/">{btnlogo}</ItemLogo></S.ButtonLogo>
        </R.ContainerLogo>
        <R.ContainerButtons>
        <S.Buttons><ItemHeader to="/">{btnhome}</ItemHeader></S.Buttons>
        <S.Buttons><ItemHeader to="/about">{btnabout}</ItemHeader></S.Buttons>
        <S.Buttons><ItemHeader to="/project">{btnprojects}</ItemHeader></S.Buttons>
        <S.Buttons><ItemHeader to="/contact">{btncontacts}</ItemHeader></S.Buttons>
        </R.ContainerButtons>
        </R.ContainerHeader>
        <S.ContainerPopularProjects>
            <S.PostInfoPopular>
            <S.InfoPopular>{infopopular}</S.InfoPopular>
            </S.PostInfoPopular>
            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imghello.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infohello}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titlehello}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitlehello}</S.SubtitleProjects>
                    <Item to="/hello"><S.ButtonProjects><Item to="/hello">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgbeat.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infobeat}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titlebeat}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitlebeat}</S.SubtitleProjects>
                    <Item to="/beat"><S.ButtonProjects><Item to="/beat">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgflow.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infoflow}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titleflow}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitleflow}</S.SubtitleProjects>
                    <Item to="/portflow"><S.ButtonProjects><Item to="/portflow">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgtodo.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infotodo}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titletodo}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitletodo}</S.SubtitleProjects>
                    <Item to="/todobasic"><S.ButtonProjects><Item to="/todobasic">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgcompo.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infocompositing}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titlecompositing}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitlecompositing}</S.SubtitleProjects>
                    <Item to="/compositing"><S.ButtonProjects><Item to="/compositing">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgcar.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infocar}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titlecar}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitlecar}</S.SubtitleProjects>
                    <Item to="/shoppingcar"><S.ButtonProjects><Item to="/shoppingcar">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgstryt.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infostrytegy}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titlestrytegy}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitlestrytegy}</S.SubtitleProjects>
                    <Item to="/landingstrytegy"> <S.ButtonProjects><Item to="/landingstrytegy">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgtaxi.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infotaxi}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titletaxi}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitletaxi}</S.SubtitleProjects>
                    <Item to="/landingtaxi"><S.ButtonProjects><Item to="/landingtaxi">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>

            <S.ContainerProjects>
                <S.ContainerImgProjects>
                <S.ImageProjects src={imgtheme.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infotheme}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titletheme}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitletheme}</S.SubtitleProjects>
                    <Item to="/freetheme"><S.ButtonProjects><Item to="/freetheme">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>
            </S.ContainerPopularProjects>
        <Footer />
        </>
    )
}