import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./TicketTable.css"

function MentorTicketTable() {
  const {searchTicketList, isLoading, error} = useSelector((state) => state.tickets);
  if(isLoading) return <h4>Loading...</h4>
  if(error) return <h4>Failed to load the page! Try again later</h4>
  return (
    <>
      <Table bordered hover className='mt-2'>
        <thead>
          <tr>
            <th>Ticket Id</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody >
          {searchTicketList.length ? (
            searchTicketList.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>
                  <td><Link className='decor' to={`mentor-ticket/${ticket._id}`}>{ticket.subject}</Link></td>  
                <td>{ticket.status}</td>
                <td>{ticket.openAt && new Date(ticket.openAt).toLocaleDateString()}</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
               <h5>Currently You have no tickets! Create Now!</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default MentorTicketTable
