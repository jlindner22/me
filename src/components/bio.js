/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import ParkGuell from "../../content/assets/IMG_9702.jpeg"
import styles from './bio.module.css'
import Container from "./container"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Container>
    {/* <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    > */}
    <div className={styles.outerDiv}>
        <div className={styles.divSpec}>
        <h2 style={{ marginTop: `0px`, fontVariant: `small-caps`}}>Hi, I'm Jen! <span>👋🏻</span></h2>
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
      </p> */}
      <img className={styles.mainPic} src={ParkGuell}
         alt={author.name}
         />
      <h2 style={{ marginTop: `0px`, fontVariant: `small-caps`}}><span>🎊</span> Welcome to my personal site <span> 🎉</span></h2>
      {/* <br></br> */}
    </div>
    </div>
    </Container>
  )
}

export default Bio
