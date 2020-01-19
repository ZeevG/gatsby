import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProjectPreview from './project-preview'
import styles from './project-grid.module.css'

export default (props) => {
  const projects = props.projects.map(project => (
    <Col className={styles.projectGridContainerCol} xs="6" sm="4">
      <ProjectPreview project={project}/>
    </Col>
  ))

  return (
    <Container>
      <Row>
        <Col xs="12">
          <h2 className={styles.projectGridContainerH2}>Projects</h2>
        </Col>
      </Row>
      <Row>
        {projects}
      </Row>
    </Container>
  )
}