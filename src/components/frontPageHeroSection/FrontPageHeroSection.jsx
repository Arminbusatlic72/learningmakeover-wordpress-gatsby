import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const FrontPageHeroSection = props => {
    let data = props.heroData
    
    return (
        
<section>
    <h1>{data.frontPageHeroSection.heading}</h1>
    <h2>{data.frontPageHeroSection.subheading}</h2>
    <button>{data.frontPageHeroSection.button.title}</button>
    <p>{data.frontPageHeroSection.text}</p>
    <GatsbyImage
                className="img"
                image={data.frontPageHeroSection.heroImage.localFile.childImageSharp.gatsbyImageData}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={data.frontPageHeroSection.heroImage.altText}
                style={{ marginBottom: `1.45rem` }}
              />
        </section>
    )
}

export default FrontPageHeroSection
