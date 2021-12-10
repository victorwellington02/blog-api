import React from "react"
import {graphql, useStaticQuery} from'gatsby'
import * as S from "./style"
import { Link } from 'gatsby'
import styled from "styled-components";


const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
}
&:hover {
  color: #5e26cd;
}
`;


export function Footer(){

const data = useStaticQuery(graphql`
  query {
      alldata {
          footers {
            btnhome
            btnabout
            btnprojects
            btncontacts
            titlecopyright
          }
      }
  }
  
  
  
  `)
  
const {btnhome, btnabout, btnprojects, btncontacts, titlecopyright} = data.alldata.footers[0]

return(
    <>
    <S.ContainerFooter>
        <S.ContainerButtons>
        <S.Buttons><Item to="/">{btnhome}</Item></S.Buttons>
        <S.Buttons><Item to="/about">{btnabout}</Item></S.Buttons>
        <S.Buttons><Item to="/project">{btnprojects}</Item></S.Buttons>
        <S.Buttons><Item to="/contact">{btncontacts}</Item></S.Buttons>
        </S.ContainerButtons>
    </S.ContainerFooter>
    <S.ContaneirCopyright>
        <S.TitleCopyright>{titlecopyright}</S.TitleCopyright>
    </S.ContaneirCopyright>
    </>
)
}