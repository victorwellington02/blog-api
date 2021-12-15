import React from "react"
import "./styles.css"
import {Header} from "../components/Header"
import {Main} from "../components/Main"
import {Footer} from "../components/Footer"
import { Helmet } from "react-helmet"


export default function Index({data}) {
  return(
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  )
}