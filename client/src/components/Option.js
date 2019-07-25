import React from 'react'
import { Form, Row, Col, Alert } from 'react-bootstrap'

import '../styles/Option.css'

export default function Option(props) {
  const { option: { answer, correct }, index, handleAnswerChange, handleCorrectAnswer, handleDeleteOption } = props

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  return (
    <>
      <Row className="option-buttons">
        <Col lg={4} md={12}>
          <label>
            OPTION {letters[index]}
            {correct && (
              <span> (CURRENT ANSWER)</span>
            )}
          </label>
        </Col>
        <Col lg={{ span: 3, offset: 3 }} md={12}>
          {!correct && (
            <label><Alert.Link className="correct-answer" href="#" onClick={() => handleCorrectAnswer(index)}>Set correct answer</Alert.Link></label>
          )}
        </Col>
        <Col lg={2} md={12}>
          <label><Alert.Link className="delete-answer" href="#" onClick={() => handleDeleteOption(index)}>Delete option</Alert.Link></label>
        </Col>
      </Row>
      <Row className="option-input">
        <Col>
          <Form.Control type="text" value={answer} onChange={(event) => handleAnswerChange(event, index)} />
        </Col>
      </Row>
    </>
  )
}
