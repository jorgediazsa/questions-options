import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

import Option from './Option'

class Options extends Component {
  render() {
    const { options, handleAddOption } = this.props
    return (
      <Form.Group>
        {options.length > 0 && options.map((option, index) => <Option key={index} option={option} index={index} {...this.props} />)}
        <Button variant="primary" onClick={() => handleAddOption()}>
          Add Option
        </Button>
      </Form.Group>
    )
  }
}

export default Options