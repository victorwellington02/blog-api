import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/stylelandingstrytegy"
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


export default function LandingStrytegy() {

  const data = useStaticQuery(graphql`
  query {
      alldata {
        strytes {
            btnlogo
            btnhome
            btnabout
            btnprojects
            btncontacts
            infostryte
            titlestryte
            subtitlestryte
            descstryte
            imgstryte {
              url
            }
          }
      }
  }
  
  
  
  `)
  
const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, infostryte, titlestryte, subtitlestryte, descstryte, imgstryte} 
= data.alldata.strytes[0]


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
                <S.InfoTitle>{infostryte}</S.InfoTitle>
                <S.Title>{titlestryte}</S.Title>
            </S.ContainerTitle>
        </S.PostInfoFv>
            <S.ContainerImg>
                <S.ImgStryte src={imgstryte.url} alt=""/>
            </S.ContainerImg>
            <S.ContainerSubtitle>
                <S.Subtitle>{subtitlestryte}
                </S.Subtitle>
                <S.Subtitle>{descstryte}
                </S.Subtitle>
            </S.ContainerSubtitle>
        </S.ContainerFv>
        <Footer />
        </>
    )
}