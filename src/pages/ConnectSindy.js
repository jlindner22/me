import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from './connectSindy.module.css'
import Gameboard from "../../content/assets/Connect_Sindy_Gameboard.png"
import Leaderboard from "../../content/assets/Connect_Sindy_Leaderboard.png"
import Home from "../../content/assets/Connect_Sindy_Home.png"


    const User = props => (
        <div className={styles.user}>
          <div className={styles.description}>
          <h2 className={styles.name}>{props.name}</h2>
         <img src={props.screenshot} className={styles.screenshot} alt="thumbnail" />
            <p className={styles.excerpt}>{props.excerpt}</p>
          </div>
        </div>
      )

    export default function ConnectSindy(props) {

    return (
        <Layout location={props.location} title={props.siteTitle}>
        <SEO title="Jen Lindner | Connect Sindy" />
        <Container>
        <div style={{ color: `navy`}}>
        <Header headerText="Connect Sindy" />
        </div>
          <User
          // name="Home/New Game"
          screenshot= {Home}
          excerpt="Home screen where players enter their names and start a new game"
          />
          <User
          name="Gameboard"
          screenshot= {Gameboard}
          excerpt="The Connect Sindy gameboard in action! Hover and drop animation effects make the gameplay more realistic"
          />
          <User
          name="Leaderboard"
          screenshot= {Leaderboard}
          excerpt="See who else has played and view their game results"
          />
<a href='https://connect-sindy-frontend.herokuapp.com/' target="_blank" rel="noopener noreferrer"> <p style={{ fontVariant: `small-caps`, fontWeight: `bolder`, fontSize: `25px`}}>Play now!</p></a>
<p style={{ color: `navy` }}><a href='https://github.com/crpineda1/connect-sindy-frontend' target="_blank" rel="noopener noreferrer">Frontend </a> & <a href='https://github.com/crpineda1/Connect-Sindy_backend' target="_blank" rel="noopener noreferrer">Backend</a> </p>
{/* <Link to='/portfolio'> <h5 style={{ textAlign: `left`}}>Back to Portfolio</h5></Link> */}

    </Container>
    </Layout>
  )
}