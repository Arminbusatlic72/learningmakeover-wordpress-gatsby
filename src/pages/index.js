import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import FrontPageHeroSection from "../components/frontPageHeroSection/FrontPageHeroSection"

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <FrontPageHeroSection heroData={data.allWpPage.edges[0].node} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/" } }) {
      edges {
        node {
          frontPageHeroSection {
            heroImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            heading
            subheading
            text
            button {
              title
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
