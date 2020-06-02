import React from "react"
import { Link } from "gatsby"
import styles from './layout.module.css'
import { rhythm, scale } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header = (
    <h1
      style={{
        fontFamily: `Montserrat, sans-serif`,
        ...scale(1.2),
        // marginBottom: rhythm(1.5),
        marginTop: 0,
        padding: 0,
        boxShadow: `none`,
        color: `inherit`,
        }}
       >
         Welcome to Jen's World!
    </h1>
  )
  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
   <header style={{ marginBottom: `1.5rem`}}>
        <Link to="/me">
          <h3 className={styles.homeButton}>Home</h3>
          {/* <img style={{ marginLeft: `-15rem`, width: `60px`, height: `90px`, borderRadius: `100%`}} src={PG} alt="hi"/> */}
        </Link>
        <ul className={styles.rightLinks}>
          <ListLink to="/me/portfolio">Portfolio</ListLink>
          <ListLink to="/me/about/">About</ListLink>
          <ListLink to="/me/contact/">Contact</ListLink>
        </ul>
      {/* <h2 className={styles.line}>_________________________________________________</h2> */}
      </header>
        {/* _________________________________________________ */}
      <main style={{ margin: 0, padding: 0}}>{children}</main>
      <br></br>
      <footer style={{ color: `navy`, textAlign: `center`}}>
        Built by Jennifer Lindner with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a> © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
