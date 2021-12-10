import React from "react"
import {graphql, useStaticQuery} from'gatsby'
import * as S from "./style"
import { Link } from 'gatsby'

import styled from "styled-components";


const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export function Main(){

const data = useStaticQuery(graphql`
query {
    alldata {
        mains {
        imgprojectfv {
            url
        }
        btnfeatured
        infotitle
        titlefv
        subtitlefv
        btnread
        infobeat
        titlebeat
        subtitlebeat
        infoflow
        titleflow
        subtitleflow
        infotaxi
        titletaxi
        subtitletaxi
        infocar
        titlecar
        subtitlecar
        infofree
        titlefree
        subtitlefree
        btnpopular
        imgbeat {
            url
        }
        imgflow {
            url
        }
        imgtaxi {
            url
        }
        imgcar {
            url
        }
        imgfree {
            url
        }
        }
    }
}
`)

const {imgprojectfv, btnfeatured, infotitle, titlefv, subtitlefv, btnread, infobeat, titlebeat, 
    subtitlebeat, infoflow, titleflow, subtitleflow, infotaxi, titletaxi, subtitletaxi, infocar, titlecar, 
    subtitlecar, infofree, titlefree, subtitlefree, btnpopular, imgbeat, imgflow, imgtaxi, imgcar, imgfree}
     = data.alldata.mains[0] 
return(
    <>
    <S.ContainerMain>
        <S.ContainerFv>
        <S.PostInfoFv>
            <S.InfoFeatured>{btnfeatured}</S.InfoFeatured>
        </S.PostInfoFv>
            <S.ContainerImg>
                <S.ImageFv src={imgprojectfv.url} alt=""/>
            </S.ContainerImg>
            <S.ContainerTitle>
                <S.InfoTitle>{infotitle}</S.InfoTitle>
                <S.Title>{titlefv}</S.Title>
            </S.ContainerTitle>
            <S.ContainerSubtitle>
                <S.Subtitle>{subtitlefv}
                </S.Subtitle>
                <Item to="/hello"><S.ButtonSubtitle><Item to="/hello">{btnread}</Item></S.ButtonSubtitle></Item>
            </S.ContainerSubtitle>
        </S.ContainerFv>

        <S.ContainerOutherProjects>
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
                <S.ImageProjects src={imgfree.url} alt=""/>
                </S.ContainerImgProjects>
                <S.ContainerTitleProjects>
                    <S.ContainerInfoTitle>
                        <S.InfoProjects>{infofree}</S.InfoProjects>
                    </S.ContainerInfoTitle>
                    <S.TitleProjects>{titlefree}</S.TitleProjects>
                </S.ContainerTitleProjects>
                <S.ContainerSubtitleProjects>
                    <S.SubtitleProjects>{subtitlefree}</S.SubtitleProjects>
                    <Item to="/freetheme"><S.ButtonProjects><Item to="/freetheme">{btnread}</Item></S.ButtonProjects></Item>
                </S.ContainerSubtitleProjects>
            </S.ContainerProjects>
        </S.ContainerOutherProjects>

        <S.ContainerPopularProjects>
            <S.PostInfoPopular>
            <S.InfoPopular>{btnpopular}</S.InfoPopular>
            </S.PostInfoPopular>
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
        </S.ContainerPopularProjects>
    </S.ContainerMain>
    </>
)
}