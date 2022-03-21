import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllTickets } from './ticketsAction'
import { Container, Row, Col, Button } from "react-bootstrap"
import { BreadcrumbPage } from '../../components/BreadCrumb/BreadCrump'
import SearchForm from '../../components/searchForm/SearchForm'
import TicketTable from '../../components/Ticket-table/TicketTable'
import { Link } from 'react-router-dom'

function TicketListPage() {

  const dispatch = useDispatch()
 

  useEffect(() => { 
    dispatch(fetchAllTickets())
  }, [ dispatch])


  return (
    <Container>
      <Row>
        <Col className='mt-4'>
          <BreadcrumbPage page="Ticket Lists" />
        </Col>
      </Row>
      <Row className='mt-4 mb-4'>
        <Col>
          <Link to="/add-ticket">
            <Button varient="primary">Add New Ticket</Button>
          </Link>

        </Col>
        <Col className='text-right'>
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>

    </Container>
  )
}

export default TicketListPage
