import React from "react"
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/stylecontact"
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


export default function Contact() {
  
  const data = useStaticQuery(graphql`
  query {
      alldata {
        contacts {
            btnlogo
            btnhome
            btnabout
            btnprojects
            btncontacts
            titlecontact
            titleinsta
            subtitleinsta
            titlegit
            subtitlegit
            titlecode
            subtitlecode
            titlewhats
            subtitlewhats
            titlelinke
            subtitlelinke
          }
      }
  }
  
  
  
  `)
  
const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, titlecontact, titleinsta, subtitleinsta, titlegit, 
  subtitlegit, titlecode, subtitlecode, titlewhats, subtitlewhats, titlelinke, subtitlelinke} = data.alldata.contacts[0]
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
        <S.ContainerContact>
            <S.ContainerTitle>
                <h1>{titlecontact}</h1>
            </S.ContainerTitle>
            <S.ContainerSocial>
            <S.ContainerInfos>
              <h2>{titleinsta}</h2>
              <S.ParagraphInfo href="https://www.instagram.com/victorwellington29_/">{subtitleinsta}</S.ParagraphInfo>
              </S.ContainerInfos>
              <S.ContainerInfos>
              <h2>{titlegit}</h2>
              <S.ParagraphInfo href="https://github.com/victorwellington02">{subtitlegit}</S.ParagraphInfo>
              </S.ContainerInfos>
              <S.ContainerInfos>
              <h2>{titlecode}</h2>
              <S.ParagraphInfo href="https://codesandbox.io/u/victorwellington02">{subtitlecode}</S.ParagraphInfo>
              </S.ContainerInfos>
              <S.ContainerInfos>
              <h2>{titlewhats}</h2>
              <S.ParagraphInfo href="">{subtitlewhats}</S.ParagraphInfo>
              </S.ContainerInfos>
              <S.ContainerInfos>
              <h2>{titlelinke}</h2>
              <S.ParagraphInfo href="https://www.linkedin.com/in/wellingtonvictor/">{subtitlelinke}</S.ParagraphInfo>
              </S.ContainerInfos>
            </S.ContainerSocial>
        </S.ContainerContact>
        <Footer />
        </>
    )
}