import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import AboutPageSection from "../components/aboutPageSection/AboutPageSection"

const About = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <AboutPageSection aboutData={data.allWpPage.edges[0].node} />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/about/" } }) {
      edges {
        node {
          aboutPageSection {
            aboutPageName
            aboutPagePosition
            aboutPageText
            aboutPageText1
            aboutPageText2
            aboutPageText3
            aboutPageImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
export default About
