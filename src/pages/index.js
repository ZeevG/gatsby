import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Carousel from '../components/carousel'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Container from '../components/container'
import Img from 'gatsby-image'
import Cover from '../components/cover'
import ProjectGrid from '../components/project/project-grid'
import Contact from '../components/contact'

import 'bootstrap/dist/css/bootstrap.min.css';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const landingPageImage = get(this, 'props.data.contentfulAsset')
    const projects = get(this, 'props.data.allContentfulProject.nodes')

    console.log(landingPageImage)

    return (
      <Layout location={this.props.location} >
          <Helmet title={siteTitle} />
          <div>
            <Cover imageUrl="" ></Cover>
          </div>
      <Container>
        <ProjectGrid id="projects" projects={projects}/>
      </Container>
      <Container>
        <Contact id="contact" />
      </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject {
      nodes {
        name
        slug
        shortDescription {
          shortDescription
        }
        coverImage {
          fluid(maxWidth: 800, maxHeight: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        images {
          fluid {
            src
          }
        }
        longDescription {
          longDescription
        }
      }
    }
    contentfulAsset(contentful_id: {eq: "29etXRq8sMIQP1Fk00jr5W"}) {
      title
      fixed(height: 600) {
        width
        height
        src
        srcWebp
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
