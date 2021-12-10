import React from "react"
import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'
import {Footer} from "../components/Footer"
import * as R from "../components/Header/style"
import * as S from "../stylespages/styleabout"
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


export default function About(){

const data = useStaticQuery(graphql`
  query {
      alldata {
        abouts {
            btnlogo
            btnhome
            btnabout
            btnprojects
            btncontacts
            titleabout
            paragraphaboutp
            paragraphabouts
            paragraphaboutt
            paragraphaboutr
          }
      }
  }
  
  
  
  `)
  
const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, titleabout, paragraphaboutp, paragraphabouts, 
    paragraphaboutt, paragraphaboutr} = data.alldata.abouts[0]

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
            <S.ContainerAbout>
                <S.ContainerTitle>
                <S.Title>{titleabout}</S.Title>
                </S.ContainerTitle>
                <S.ContainerText>
                <S.Text>{paragraphaboutp}
                </S.Text>
                <S.Text>{paragraphabouts}
                </S.Text>
                <S.Text>{paragraphaboutt}
                </S.Text>
                <S.Text>{paragraphaboutr}
                </S.Text>
                </S.ContainerText>
            </S.ContainerAbout>
            <Footer />
        </>
    )
}