import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import AddTicketForm from '../../components/Add-TicketForm/AddTicketForm'
import { BreadcrumbPage } from '../../components/BreadCrumb/BreadCrump'

function AddTicket() {

  return (
    <Container>
       <Row>
        <Col className='mt-4'>
       <BreadcrumbPage  page="Add new ticket form" />
        </Col>
      </Row>
      <Row>
        <Col>
        <AddTicketForm  />
        </Col>
      </Row>
    </Container>
  )
}

export default AddTicket
