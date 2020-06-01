import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from './blinddate.module.css'
import Matches from "../../content/assets/BlindDate_Matches.png"
import Home from "../../content/assets/BlindDate_Home.png"
import MyProfile from "../../content/assets/BlindDate_MyProfile.png"
import NoPreferences from "../../content/assets/BlindDate_NoPreferences.png"
import Preferences from "../../content/assets/BlindDate_Preferences.png"
import PreferencesSelected from "../../content/assets/BlindDate_PreferencesSelected.png"
import UserProfile from "../../content/assets/BlindDate_UserProfile.png"
import EditAccount from "../../content/assets/BlindDate_EditAccount.png"
import EditMainPage from "../../content/assets/BlindDate_EditMainPage.png"

    const User = props => (
        <div className={styles.user}>
          <div className={styles.description}>
          <h2 className={styles.name}>{props.name}</h2>
         <img src={props.screenshot} className={styles.screenshot} alt="thumbnail" />
            <p className={styles.excerpt}>{props.excerpt}</p>
          </div>
        </div>
      )

    export default function BlindDate(props) {

    return (
        <Layout location={props.location} title={props.siteTitle}>
        <SEO title="Jen Lindner" />
        <Container>
        <div style={{ color: `navy`}}>
        <Header headerText="BlindDate" />   
        </div>
          <User
          // name="Home"
          screenshot= {Home}
          excerpt="Home page - choose to log into an existing account or sign up for a new account"
          />
          <User
          name="Matches"
          screenshot= {Matches}
          excerpt="Display all users you have matched with. You can delete a match from this page"
          />
          <User
          name="My Profile"
          screenshot= {MyProfile}
          excerpt="Your profile page, with the option to edit your information"
          />
          <User
          name="Preferences Selection"
          screenshot= {PreferencesSelected}
          excerpt="Shows your preference choices and allows you to edit your selections"
          />
          <User
          name="Preference Matches"
          screenshot= {Preferences}
          excerpt="Displays all user profiles matching the preferences you've set"
          />
          <User
          name="No Preferences"
          screenshot= {NoPreferences}
          excerpt="This page appears if no user profiles match the exact preferences you've set"
          />
          <User
          name="User Profile"
          screenshot= {UserProfile}
          excerpt="Another user's profile, with the option to match with them"
          />
          <User
          name="Edit Main Page"
          screenshot= {EditMainPage}
          excerpt="Choose which part of your profile/account you'd like to adjust"
          />
          <User
          name="Edit Account"
          screenshot= {EditAccount}
          excerpt="One of multiple pages enabling the user to edit their account/profile"
          />

    <a href='https://connect-sindy-frontend.herokuapp.com/' target="_blank" rel="noopener noreferrer"> <p style={{ fontVariant: `small-caps`, fontWeight: `bolder`, fontSize: `25px`}}>Sign up now!</p></a>
    <p style={{ color: `navy`}}><a href='https://github.com/jlindner22/BlindDate-frontend' target="_blank" rel="noopener noreferrer">Frontend </a> & <a href='https://github.com/jlindner22/BlindDate-backend' target="_blank" rel="noopener noreferrer">Backend</a> </p>
    </Container>
    </Layout>
  )
}