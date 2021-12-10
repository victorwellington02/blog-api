import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/stylebeat"
import styled from "styled-components";


const Item = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #5e26cd;
  }
  &:hover {
    color: #5e26cd;
  }
`;

const ItemLogo = styled(Link)`
  text-decoration: none;
  color: #000;
`;


export default function Beat() {

    const data = useStaticQuery(graphql`
    query {
        alldata {
          beats {
              btnlogo
              btnhome
              btnabout
              btnprojects
              btncontacts
              infobeat
              titlebeat
              subtitlebeat
              descbeat
              imgbeat {
                url
              }
            }
        }
    }
    
    
    
    `)
    
  const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, infobeat, titlebeat, subtitlebeat, descbeat, imgbeat} 
  = data.alldata.beats[0]

    return(
        <>
        <R.ContainerHeader>
        <R.ContainerLogo>
        <S.ButtonLogo><ItemLogo to="/">{btnlogo}</ItemLogo></S.ButtonLogo>
        </R.ContainerLogo>
        <R.ContainerButtons>
        <S.Buttons><Item to="/">{btnhome}</Item></S.Buttons>
        <S.Buttons><Item to="/about">{btnabout}</Item></S.Buttons>
        <S.Buttons><Item to="/project">{btnprojects}</Item></S.Buttons>
        <S.Buttons><Item to="/contact">{btncontacts}</Item></S.Buttons>
        </R.ContainerButtons>
        </R.ContainerHeader>
        <S.ContainerFv>
        <S.PostInfoFv>
            <S.ContainerTitle>
                <S.InfoTitle>{infobeat}</S.InfoTitle>
                <S.Title>{titlebeat}</S.Title>
            </S.ContainerTitle>
        </S.PostInfoFv>
            <S.ContainerImg>
                <S.ImgBeat src={imgbeat.url} alt=""/>
            </S.ContainerImg>
            <S.ContainerSubtitle>
                <S.Subtitle>{subtitlebeat}
                </S.Subtitle>
                <S.Subtitle>{descbeat}
                </S.Subtitle>
            </S.ContainerSubtitle>
        </S.ContainerFv>
        <Footer />
        </>
    )
}