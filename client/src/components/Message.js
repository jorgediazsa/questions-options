import React from 'react'
import { Toast } from 'react-bootstrap'

export default function Message(props) {
  const { handleCloseMessage, message } = props

  return (
    <Toast
      onClose={() => handleCloseMessage('')}
      show={Boolean(message)}
      delay={3000}
      style={{
        position: 'absolute',
        top: 0,
        right: '40%',
      }}
      autohide
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
