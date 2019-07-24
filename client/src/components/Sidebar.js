import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

class Sidebar extends Component {

  renderQuestions() {
    const { questions, currentQuestion } = this.props
    if (questions.length === 0) {
      return <span>We got nothing here folks</span>
    }
    return (
      questions.map(
        ({ _id, title }, index) => 
          <li className={`question ${ currentQuestion === _id ? `selected` : `` }`} key={_id}>
            <Link to={`/${index}`}>
              {title}
            </Link>
          </li>
      )
    )
  }

  render() {
    return (
      <Col xs={3}>
        <ul>{this.renderQuestions()}</ul>
      </Col>
    )
  }
}

export default Sidebar