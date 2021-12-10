import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/styleshoppingcar"
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


export default function ShoppingCar() {

  const data = useStaticQuery(graphql`
  query {
      alldata {
        cars {
            btnlogo
            btnhome
            btnabout
            btnprojects
            btncontacts
            infocar
            titlecar
            subtitlecar
            desccar
            imgcar {
              url
            }
          }
      }
  }
  
  
  
  `)
  
const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, infocar, titlecar, subtitlecar, desccar, imgcar} 
= data.alldata.cars[0]


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
                <S.InfoTitle>{infocar}</S.InfoTitle>
                <S.Title>{titlecar}</S.Title>
            </S.ContainerTitle>
        </S.PostInfoFv>
            <S.ContainerImg>
                <S.ImgCar src={imgcar.url} alt=""/>
            </S.ContainerImg>
            <S.ContainerSubtitle>
                <S.Subtitle>{subtitlecar}
                </S.Subtitle>
                <S.Subtitle>{desccar}
                </S.Subtitle>
            </S.ContainerSubtitle>
        </S.ContainerFv>
        <Footer />
        </>
    )
}