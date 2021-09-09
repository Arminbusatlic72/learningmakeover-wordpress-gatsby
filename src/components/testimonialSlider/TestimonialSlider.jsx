import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TestimonialSlider = () => {
  const data = useStaticQuery(graphql`
    {
      allWpTestimonialsSlide {
        edges {
          node {
            testimonialsSliderContent {
              name
              position
              testimonial
            }
          }
        }
      }
    }
  `)
  return (
    <section>
      <h2>Testimonials</h2>
      <Slider
        dots={true}
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
      >
        {data.allWpTestimonialsSlide.edges.map(edge => (
          <div key={edge.node.id}>
            <p>{edge.node.testimonialsSliderContent.testimonial}</p>
            <p>{edge.node.testimonialsSliderContent.name}</p>

            <p>{edge.node.testimonialsSliderContent.position}</p>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default TestimonialSlider
