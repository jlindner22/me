import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"
import TootooLaptop from "../../content/assets/Tootoo_Asleep_Laptop.jpeg"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

export default function Contact(props) {
    
    return (
        <Layout location={props.location} title={props.siteTitle}>
        <SEO title="Jen Lindner" />
        <Container>

        {/* {props.title} */}
        <div style={{ color: `navy` }}>
        <Header headerText="Contact" />
        <p style={{ textAlign: `justify`}}>I'd love to hear from you! Send me a message at <a href="mailto:jenlindner22@gmail.com">Jenlindner22@gmail.com</a> or 
        connect with me on <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer"> LinkedIn </a> {` `} 👋🏻
        </p>
        <img src={TootooLaptop} alt="Tootoo" style={{
           marginRight: rhythm(1 / 2),
           marginBottom: 20,
           maxWidth: `65%`,
           minWidth: 10,
           borderStyle: `ridge`,
           borderRadius: `30%`,
         }}/>
        <p> I'll get back to you as soon as Tootoo relinquishes my laptop... </p>
    </div>
    </Container>
    </Layout>
  )
}
