import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { replyOnTicket } from "../../pages/TicketListPage/ticketsAction"

function ReplyMessage({ _id }) {

  const dispatch = useDispatch()
  const { user: { name } } = useSelector(state => state.user)
  const [message, setMessage] = useState('')

  const handleOnChange = e => {
    setMessage(e.target.value)

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message,
      sender: name
    }
    dispatch(replyOnTicket(_id, msgObj))
    setMessage("")
  }
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label style={{ fontWeight: "bold" }}>Reply</Form.Label><br />
        <Form.Text style={{ fontColor: "red" }}>*Drop your message here</Form.Text>
        <Form.Control
          name=""
          value={message}
          onChange={handleOnChange}
          as="textarea"
          rows='5'

        />
        <div className='mt-3' style={{ textAlign: "right" }}>
          <Button variant='primary' type='submit'>Confirm Reply</Button>
        </div>
      </Form>
    </div>
  )
}

export default ReplyMessage
