import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const FrontPageAboutFounderSection = props => {
  let data = props.aboutFounderData
  return (
    <section>
      <GatsbyImage
        className="img"
        image={
          data.frontPageAboutFounderSection.founderimage.localFile
            .childImageSharp.gatsbyImageData
        }
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt={data.frontPageAboutFounderSection.founderimage.altText}
        style={{ marginBottom: `1.45rem` }}
      />
      <h2>{data.frontPageAboutFounderSection.foundertitle}</h2>
      <p>{data.frontPageAboutFounderSection.foundertext}</p>
    </section>
  )
}

export default FrontPageAboutFounderSection
