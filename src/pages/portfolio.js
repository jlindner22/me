import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styles from './portfolio.module.css'
import Container from "../components/portfolioContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SindyHome from "../../content/assets/Connect_Sindy_Home.png"
import BlindDateHome from "../../content/assets/BlindDate_Home.png"
    
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="thumbnail" />
        <div className={styles.description}>
        <Link to={props.link}> <h2 className={styles.name}>{props.name}</h2></Link>
        <p className={styles.excerpt}>{props.excerpt}</p>
       {props.link ? <a href={props.app} target="_blank" rel="noopener noreferrer"> <h4>Check it out</h4>
        </a> : null}
        </div>
    </div>
)

export default function Portfolio(props) {

    return (
        <Layout location={props.location} title={props.siteTitle}>
        <SEO title="Jen Lindner | Portfolio" />
        <Container>

        {props.title}
        <div style={{ color: `navy` }}>
        <Header headerText="My Portfolio" />
        <p> Feel free to <a href="mailto:jenlindner22@gmail.com">contact me </a>with any questions!</p>
        <User
            name="BlindDate"
            avatar= {BlindDateHome}
            excerpt="A social/dating application that facilitates relationships without the bias of user photos"
            link='/BlindDate/'
            app='http://blinddate-js.herokuapp.com/'
            />
            <User
            name="Connect Sindy"
            avatar= {SindyHome}
            excerpt="A cow-themed version of Connect Four"
            link='/ConnectSindy/'
            app='https://connect-sindy-frontend.herokuapp.com/'
            />
            <User
            name="Carded"
            avatar= "https://i.redd.it/5kh9fzj413i01.jpg"
            excerpt="IN PROGRESS: Business card designer application"
            // link='/connectSindy/'
            // app='https://connect-sindy-frontend.herokuapp.com/'
            />
            <br></br>
            <p>Check out my <a href='https://github.com/jlindner22' target="_blank" rel="noopener noreferrer">GitHub</a> page to see what else I've been working on!</p>

    </div>
    </Container>
    </Layout>
  )
}