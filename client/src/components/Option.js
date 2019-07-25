import React from 'react'
import { Form, Row, Col, Alert } from 'react-bootstrap'

export default function Option(props) {
  const { option: { answer, correct }, index, handleAnswerChange, handleCorrectAnswer, handleDeleteOption } = props

  return (
    <>
      <Row>
        <Col xs={4}>
          OPTION A
          {correct && (
            <span>(CURRENT ANSWER)</span>
          )}
        </Col>
        <Col xs={{ span: 3, offset: 2 }}>
          {!correct && (
            <Alert.Link href="#" onClick={() => handleCorrectAnswer(index)}>Set correct answer</Alert.Link>
          )}
        </Col>
        <Col xs={3}>
          <Alert.Link href="#" onClick={() => handleDeleteOption(index)}>Delete option</Alert.Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control type="text" value={answer} onChange={(event) => handleAnswerChange(event, index)} />
        </Col>
      </Row>
    </>
  )
}
