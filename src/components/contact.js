import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import VizSensor from 'react-visibility-sensor';
import styles from './project/project-grid.module.css'

export default (props) => {

  const [email, setEmail] = useState("bm90LWEtcmVhbC1lbWFpbA==");
  const [decoded, setDecoded] = useState(false);

  return (
    <Container>
      <Row>
        <Col xs="12">
          <h2 id={props.id} className={styles.projectGridContainerH2}>Contact</h2>
        </Col>
      </Row>
      <Row>
        <VizSensor partialVisibility active={!decoded} onChange={(isVisible) => {
            if (isVisible) {
              setDecoded(true)
              setEmail(atob(email))
            }
          }}
        >
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue lacinia lectus, et ultrices libero lobortis vitae. Cras consequat tortor ac convallis egestas.</p>
            <a href={"mailto:" + email + "@gmail.com"}>{email + "@gmail.com"}</a>
          </div>
        </VizSensor>
      </Row>
    </Container>
  )
}