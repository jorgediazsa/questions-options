import React, { Component } from 'react'
import { Col, Form, Button } from 'react-bootstrap'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.currentQuestion ? this.props.currentQuestion._id : '',
      title: this.props.currentQuestion ? this.props.currentQuestion.title : '',
      question: this.props.currentQuestion ? this.props.currentQuestion.question : '',
      options: this.props.currentQuestion ? this.props.currentQuestion.options : []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentQuestion && this.props.currentQuestion._id !== prevState._id) {
      this.setState({
        ...this.props.currentQuestion
      })
    }
  }
  

  handleTitleChange = event => this.setState({ title: event.target.value })
  handleQuestionChange = event => this.setState({ question: event.target.value })
  handleDelete = () => this.props.handleDelete(this.state._id)
  handleSubmit = () => {
    const { _id, ...question } = this.state
    this.props.handleSubmit(_id, question)
    if (!_id) {
      this.setState({
        _id: '',
        title: '',
        question: '',
        options: []
      })
    }
  }

  render() {
    const { title, question } = this.state

    return (
      <Col>
        <h3>{this.props.currentQuestion ? `Edit`: `Add`} Question</h3>
        <Form>
          <Form.Group>
            <Form.Label>TITLE</Form.Label>
            <Form.Control type="text" onChange={event => this.handleTitleChange(event)} value={title} />
            <Form.Label>QUESTION</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={event => this.handleQuestionChange(event)} value={question} />
          </Form.Group>
          <Button variant="primary" onClick={() => this.handleSubmit()}>
            Save
          </Button>
          {this.props.currentQuestion && (
            <Button variant="danger" onClick={() => this.handleDelete()}>
              Delete
            </Button>
          )}
        </Form>
      </Col>
    )
  }
}

export default QuestionForm