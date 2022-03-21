import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import "./AddTicketForm.css"
import { shortText } from "../../utils/Validation"
import { openNewTicket } from './newTicketAction';
import { resetSuccessMsg } from './addTicketSlice';
import {showSuccessMsg} from "../../utils/Notification"

const initialFormData = {
    subject: "",
    date: "",
    message: ""
}

const initialFormError = {
    subject: false,
    date: false,
    message: false
}


function AddTicketForm() {
    const [formData, setFormData] = useState(initialFormData)
    const [formDataError, setFormDataError] = useState(initialFormError)

    const dispatch = useDispatch()
 
    //const { user: { name } } = useSelector((state) => state.user)
    const {  successMsg } = useSelector((state) => state.openTicket)

    useEffect(() => {
        return () => {
            successMsg && dispatch(resetSuccessMsg())}
    }, [dispatch, formData, formDataError])

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFormDataError(initialFormError)
        const isSubjectValid = await shortText(formData.subject)

        setFormDataError({
            ...initialFormError,
            subject: !isSubjectValid
        })
        dispatch(openNewTicket({ ...formData, sender: "student" }))  
    }
  
 
    return (
        <>
            <div className='add-ticket-form bg-light mt-3'>
                <h1 className="text-primary text-center mt-2 mb-2">Add New Ticket</h1>
                <hr />

                <div>
                    {successMsg && showSuccessMsg(successMsg)}
                </div>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group as={Row} className="mt-3 mb-3">
                        <Form.Label column sm={2}>
                            Subject
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="subject"
                                value={formData.subject}
                                maxLength="100"
                                onChange={handleOnChange}
                                placeholder="Subject"
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3">
                        <Form.Label column sm={2} >
                            Ticket Created At
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="date" name="date"
                                value={formData.date}
                                onChange={handleOnChange}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-3 mb-3">
                        <Form.Label >Description</Form.Label>
                        <Form.Control as="textarea" name="message" rows="5"
                            value={formData.message}
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>

                    <Button type="submit">
                        Create Ticket
                    </Button>
                </Form>
            </div>


        </>
    )
}

export default AddTicketForm
