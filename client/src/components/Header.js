import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <Row className="testsdfa">
        <Col xs={3}>Header</Col>
        <Col>
          <Link to="/">Add Question</Link>
        </Col>
      </Row>
    )
  }
}

export default Header