import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Carousel from '../components/carousel'
import Layout from '../components/layout'
import Container from '../components/container'
import { Container as BsContainer, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import styles from './project.module.css'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

class Project extends React.Component {
  render() {
    const project = get(this, 'props.data.contentfulProject')

    if (project.images) {
      project.carouselImages = [project.coverImage].concat(project.images);
    } else {
      project.carouselImages = [project.coverImage];
    }

    console.log(project)

    return (
      <Layout location={this.props.location} >
        <Helmet title="" />
        <Container>
          <BsContainer>
            <Row>
              <Col md="12">
                <div className={"float float-right"}>
                  <Carousel images={project.carouselImages} />
                </div>
                <div>
                  <h2>{project.name}</h2>
                  {documentToReactComponents(project.longDescription.json, options)}
                </div>
              </Col>
            </Row>
          </BsContainer>
        </Container>
      </Layout>
    )
  }
}

export default Project

export const pageQuery = graphql`
  query ProjectQueryBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      slug
      shortDescription {
        shortDescription
      }
      coverImage {
        id
        title
        fluid(maxWidth: 2400, maxHeight: 2400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      images {
        id
        title
        fluid(maxWidth: 2400, maxHeight: 2400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      longDescription {
        json
      }
    }
  }
`