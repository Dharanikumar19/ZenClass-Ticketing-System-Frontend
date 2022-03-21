import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BreadcrumbPage } from '../../components/BreadCrumb/BreadCrump'
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllTicketsForMentor} from "../TicketListPage/ticketsAction";
import MentorTicketTable from '../../components/Ticket-table/MentorTicketTable'

function DashboardPage() {
    const dispatch = useDispatch()
    const {tickets} = useSelector(state => state.tickets)

    useEffect(() => { 
         dispatch(fetchAllTicketsForMentor())   
    }, [ dispatch])
    
    const pendingTickets = tickets.filter(ticket => ticket.status !=="Closed")
    const totalTickets = tickets.length

  return (
   <Container>
        <Row>
        <Col className='mt-4'>
        <BreadcrumbPage page="Mentor Dashboard" />
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
       <MentorTicketTable />
        </Col>
    </Row>
   </Container>
  )
}

export default DashboardPage