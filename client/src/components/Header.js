import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import '../styles/Header.css'
import logo from '../images/logo.png'

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col lg={4} md={6} className="logo d-none d-md-block">
          <img src={logo} alt="Problem manager" />
          Problem manager
        </Col>
        <Col lg={{ span: 4, offset: 4 }} md={6} className="add-question">
          <Link to="/"><FontAwesomeIcon icon={faPlus} /> Add Question</Link>
        </Col>
      </Row>
    )
  }
}

export default Header