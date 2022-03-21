import React, { useEffect } from 'react'
import {Container, Row, Col, Button, Alert} from "react-bootstrap"
import { BreadcrumbPage } from '../../components/BreadCrumb/BreadCrump'
import {fetchSingleTicketForMentor} from "../TicketListPage/ticketsAction"
import MessageHistory from '../../components/Message-history/MessageHistory'
import ReplyMessage from '../../components/Message-history/ReplyMessage'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
 import {resetResponseMsg} from "../TicketListPage/ticketSlice"

function MentorTicketPage() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { error, selectedTicket, replyMsg, replyTicketError} = useSelector(state => state.tickets)


    useEffect(() => {
         dispatch(fetchSingleTicketForMentor(id));

        return ()=> { 
        (replyMsg || replyTicketError) && dispatch(resetResponseMsg())}
    }, [ id, dispatch,replyMsg ,replyTicketError]);
    
  return (
    <Container>
        <Row>
            <Col className='mt-4'>
            <BreadcrumbPage page="Ticket Details" />
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
            {error && <Alert className="text-center" variant='danger'>{error}</Alert>}
            {replyTicketError && <Alert variant='danger' className="text-center">{replyTicketError}</Alert>}
            {replyMsg && <Alert variant="success" className="text-center">{replyMsg}</Alert>}

            </Col>
        </Row>
        <Row>
            <Col className='text-secondary' style={{fontWeight:"bold"}}>
          <div className='subject mt-2'>Subject : {selectedTicket.subject}</div>
          <div className='subject mt-2'>Ticket Cretaed at : {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleDateString()}</div>
          <div className='subject mt-2'>Status : {selectedTicket.status}</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-4'>
            {selectedTicket.conversations && <MessageHistory msg={selectedTicket.conversations} />} 
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className='mt-4'>
                <ReplyMessage _id = {id} /> 
            </Col>
        </Row>
    </Container>
  )
}

export default MentorTicketPage
