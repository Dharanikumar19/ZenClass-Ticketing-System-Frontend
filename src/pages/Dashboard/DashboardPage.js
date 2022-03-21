import React,{useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TicketTable from '../../components/Ticket-table/TicketTable'
import { BreadcrumbPage } from '../../components/BreadCrumb/BreadCrump'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllTickets} from "../TicketListPage/ticketsAction";

function DashboardPage() {
    const dispatch = useDispatch()
    const {tickets} = useSelector(state => state.tickets)

    useEffect(() => { 
         dispatch(fetchAllTickets())   
    }, [ dispatch])
    
    const pendingTickets = tickets.filter(ticket => ticket.status !=="Closed")
    const totalTickets = tickets.length

  return (
   <Container>
        <Row>
        <Col className='mt-4'>
        <BreadcrumbPage page="Dashboard" />
        </Col>
    </Row>
    <Row>
        <Col className='text-center mt-4 mb-2'>
        <Link to="/add-ticket">
        <Button variant='primary' style={{fontSize:"2rem", padding:"10px 30px"}}>Add New Ticket</Button>
        </Link>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mt-2 mb-2'>
        <h6>Total Number of Tickets : {totalTickets} </h6>
        <h6>Pending Tickets (unsolved) : {pendingTickets.length}</h6>
        </Col>
    </Row>
    <Row>
        <Col className='mt-2'>
        <h5>Recently Added Tickets</h5>
        </Col>
    </Row>
    <br></br>
    <Row>
        <Col className='recent-tickets'>
       <TicketTable />
        </Col>
    </Row>
   </Container>
  )
}

export default DashboardPage
