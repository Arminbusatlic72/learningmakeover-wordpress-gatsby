import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPageSection = props => {
  let data = props.aboutData
  return (
    <section>
      <GatsbyImage
        className="img"
        image={
          data.aboutPageSection.aboutPageImage.localFile.childImageSharp
            .gatsbyImageData
        }
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt={data.aboutPageSection.aboutPageImage.altText}
        style={{ marginBottom: `1.45rem` }}
      />
      <h2>{data.aboutPageSection.aboutPageName}</h2>
      <p>{data.aboutPageSection.aboutPagePosition}</p>
      <p>{data.aboutPageSection.aboutPageText}</p>
      <p>{data.aboutPageSection.aboutPageText1}</p>
      <p>{data.aboutPageSection.aboutPageText2}</p>
      <p>{data.aboutPageSection.aboutPageText3}</p>
    </section>
  )
}

export default AboutPageSection
