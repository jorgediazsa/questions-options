import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Option from './Option'
import '../styles/Options.css'

export default function Options(props) {
  const { options, handleAddOption } = props

  return (
    <Form.Group className="options">
      {options.length > 0 && options.map((option, index) => <Option key={index} option={option} index={index} {...props} />)}
      <Button className="add-option" variant="primary" onClick={() => handleAddOption()}>
        <FontAwesomeIcon icon={faPlus} /> Add Option
      </Button>
    </Form.Group>
  )
}