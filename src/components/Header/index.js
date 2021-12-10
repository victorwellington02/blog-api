import React from "react"
import {graphql, useStaticQuery} from'gatsby'
import * as S from "./style"
import { Link } from 'gatsby'
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

export function Header(){

const data = useStaticQuery(graphql`
query {
    alldata {
        headers {
            btnlogo
            btnhome
            btnabout
            btnprojects
            btncontacts
            imgavatar {
                url
            }
            logoinstagram {
                url
            }
            logogit {
                url
            }
            logocode {
                url
            }
            logowhats {
                url
            }
            backgroundavatar {
                url
            }
            logolinkedin {
                url
            }
        }
    }
}



`)

const {btnlogo, btnhome, btnabout, btnprojects, btncontacts, imgavatar, logoinstagram, logogit, logocode, 
    logowhats, backgroundavatar, logolinkedin} = data.alldata.headers[0]


return(
    <>
    <S.ContainerHeader>
        <S.ContainerLogo>
        <S.ButtonLogo><ItemLogo to="/">{btnlogo}</ItemLogo></S.ButtonLogo>
        </S.ContainerLogo>
        <S.ContainerButtons>
        <S.Buttons><Item to="/">{btnhome}</Item></S.Buttons>
        <S.Buttons><Item to="/about">{btnabout}</Item></S.Buttons>
        <S.Buttons><Item to="/project">{btnprojects}</Item></S.Buttons>
        <S.Buttons><Item to="/contact">{btncontacts}</Item></S.Buttons>
        </S.ContainerButtons>
    </S.ContainerHeader>
    <S.ContainerProfile backgroundImage={backgroundavatar.url}>
            <S.ContainerAuthor>
                <S.Avatar>
                <Item to="/about"><S.ImageAvatar src={imgavatar.url} alt=""/></Item>
                </S.Avatar>
            </S.ContainerAuthor>
            <S.ContainerContact>
                <S.ContainerSocial>
                    <S.BoxSocial>
                        <S.Social>
                            <S.LinkRedes href="https://www.instagram.com/victorwellington29_/"><S.ImageButtons src={logoinstagram.url} alt=""/></S.LinkRedes>
                        </S.Social>
                    </S.BoxSocial>
                    <S.BoxSocial>
                        <S.Social>
                            <S.LinkRedes href="https://github.com/victorwellington02"><S.ImageButtons src={logogit.url} alt=""/></S.LinkRedes>
                        </S.Social>
                    </S.BoxSocial>
                    <S.BoxSocial>
                        <S.Social>
                            <S.LinkRedes href="https://codesandbox.io/u/victorwellington02"><S.ImageButtons src={logocode.url} alt=""/></S.LinkRedes>
                        </S.Social>
                    </S.BoxSocial>
                    <S.BoxSocial>
                        <S.Social>
                            <S.LinkRedes href="#"><S.ImageButtons src={logowhats.url} alt=""/></S.LinkRedes>
                        </S.Social>
                    </S.BoxSocial>
                    <S.BoxSocial>
                        <S.Social>
                            <S.LinkRedes href="https://www.linkedin.com/in/wellingtonvictor/"><S.ImageButtons src={logolinkedin.url} alt=""/></S.LinkRedes>
                        </S.Social>
                    </S.BoxSocial>
                </S.ContainerSocial>
            </S.ContainerContact>
        </S.ContainerProfile>
    </>
)
}