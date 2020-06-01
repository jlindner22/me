import React from "react"
import containerStyles from "./portfoliocontainer.module.css"

export default function PortfolioContainer({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}