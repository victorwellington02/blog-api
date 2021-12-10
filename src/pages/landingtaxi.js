import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/stylelandingtaxi"
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


export default function LandingTaxi() {

    const data = useStaticQuery(graphql`
    query {
        alldata {
          taxis {
              btnlogo
              btnhome
              btnabout
              btnprojects
              btncontacts
              infotaxi
              titletaxi
              subtitletaxi
              desctaxi
              imgtaxi {
                url
              }
            }
        }
    }
    
    
    
    `)
    
  const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, infotaxi, titletaxi, subtitletaxi, desctaxi, imgtaxi} 
  = data.alldata.taxis[0]


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
                <S.InfoTitle>{infotaxi}</S.InfoTitle>
                <S.Title>{titletaxi}</S.Title>
            </S.ContainerTitle>
        </S.PostInfoFv>
            <S.ContainerImg>
                <S.ImgTaxi src={imgtaxi.url} alt=""/>
            </S.ContainerImg>
            <S.ContainerSubtitle>
                <S.Subtitle>{subtitletaxi}
                </S.Subtitle>
                <S.Subtitle>{desctaxi}
                </S.Subtitle>
            </S.ContainerSubtitle>
        </S.ContainerFv>
        <Footer />
        </>
    )
}