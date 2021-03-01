import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const ProjectImg = ({filename, alt}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 1300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename),
      )

      if (!image) return null

      return image.node.childImageSharp ? (
        <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
      ) : (
        ''
      )
    }}
  />
)

export default ProjectImg
