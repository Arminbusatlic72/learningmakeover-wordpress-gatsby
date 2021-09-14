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
            id
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
    <section className="testimonials-slider-section">
      <div className="global-wrapper">
        <h2 className="testimonials-slider-section__heading">Testimonials</h2>
        <Slider
          dots={true}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
        >
          {data.allWpTestimonialsSlide.edges.map(edge => (
            <div
              className="testimonials-slider-section__slide"
              key={edge.node.id}
            >
              <p className="testimonials-slider-section__slide-text">
                {edge.node.testimonialsSliderContent.testimonial}
              </p>
              <p className="testimonials-slider-section__slide-name">
                {edge.node.testimonialsSliderContent.name}
              </p>

              <p className="testimonials-slider-section__slide-position">
                {edge.node.testimonialsSliderContent.position}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default TestimonialSlider
