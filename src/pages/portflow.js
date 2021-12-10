import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/styleportflow"
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


export default function PortFlow() {

    const data = useStaticQuery(graphql`
    query {
        alldata {
          flows {
              btnlogo
              btnhome
              btnabout
              btnprojects
              btncontacts
              infoflow
              titleflow
              subtitleflow
              descflow
              imgflow {
                url
              }
            }
        }
    }
    
    
    
    `)
    
  const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, infoflow, titleflow, subtitleflow, descflow, imgflow} 
  = data.alldata.flows[0]

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
                <S.InfoTitle>{infoflow}</S.InfoTitle>
                <S.Title>{titleflow}</S.Title>
            </S.ContainerTitle>
        </S.PostInfoFv>
            <S.ContainerImg>
                <S.ImgFlow src={imgflow.url} alt=""/>
            </S.ContainerImg>
            <S.ContainerSubtitle>
                <S.Subtitle>{subtitleflow}
                </S.Subtitle>
                <S.Subtitle>{descflow}
                </S.Subtitle>
            </S.ContainerSubtitle>
        </S.ContainerFv>
        <Footer />
        </>
    )
}