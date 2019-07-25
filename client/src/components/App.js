import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Row, Spinner } from 'react-bootstrap'

import '../styles/App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import QuestionForm from './QuestionForm'
import Message from './Message'

import request from '../utils/request'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questions: null,
      currentQuestion: null,
      loading: true,
      message: null
    }
  }

  handleSubmit = (id, question) => {
    if (id) {
      
      request(id, question, 'put')
        .then(data => this.getData('The question was edited successfully.'))
    } else {
      request(id, question, 'post')
        .then(data => this.getData('The question was created successfully.'))
    }
  }

  handleDelete = (id) => 
    request(id, null, 'delete')
      .then(data => this.getData('The question was deleted successfully.'))
  
  handleCloseMessage = () => this.setState({ message: '' })
  

  componentDidMount() {
    this.getData()
  }

  getData = (message = '') => {
    request()
      .then(data => {
        this.setState({
          ...this.state,
          loading: false,
          questions: data.data,
          message
        })
      })
  }

  renderContainer(props) {
    const { questions, currentQuestion } = this.state

    return (
      <>
        <Sidebar {...props} questions={questions} currentQuestion={currentQuestion} />
        <QuestionForm
          {...props}
          currentQuestion={questions[props.match.params.id]}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </>
    )
  }

  render() {
    const { loading, message } = this.state
    return (
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
            {loading && (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
            {!loading && (
              <>
                <Message handleCloseMessage={this.handleCloseMessage} message={message} />
                <Route path="/:id" render={props => this.renderContainer(props)} />
                <Route exact path="/" render={props => this.renderContainer(props)} />
              </>
            )}
          </Row>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App
