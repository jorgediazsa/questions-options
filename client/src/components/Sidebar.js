import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

import '../styles/Sidebar.css'

class Sidebar extends Component {

  renderQuestions(questions, currentQuestion) {
    
    return (
      questions.map(
        ({ _id, title }, index) => 
          <li className="question" key={_id}>
            <Link to={`/${index}`} className={currentQuestion && currentQuestion._id === _id ? `selected` : `` }>
              {title}
            </Link>
          </li>
      )
    )
  }

  render() {
    const { questions, currentQuestion } = this.props
    return (
      <Col xs={3} className="sidebar">
        {questions && <ul>{this.renderQuestions(questions, currentQuestion)}</ul>}
        {!questions.length && <span className="nothing-here">We got nothing here folks</span>}        
      </Col>
    )
  }
}

export default Sidebar