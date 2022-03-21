import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Row, Col, Container } from "react-bootstrap"
import { BreadcrumbPage } from '../../components/BreadCrumb/BreadCrump'
import "./StudentList.css"


function StudentList() {
    const [user, setUser] = useState([])

    useEffect(() => {
        let fetchUsers = async () => {
            try {
                let allUsers = await axios.get("https://zen-class-ticketing-system.herokuapp.com/user")
                setUser(allUsers.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers();
    }, [])

    const newArray = user.filter(function (data) {
        return data.role === 0
    }
    );

    return (
        <>
            <Container className="StudentList">
                <Row>
                    <Col className='mt-4'>
                        <BreadcrumbPage page=" Students List" />
                    </Col>
                </Row>
                <Table bordered hover className='studentListTable'>
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Batch</th>
                            <th>Phone No</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            newArray.map((u) => (
                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.batch}</td>
                                    <td>{u.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </Container>

        </>
    )
}

export default StudentList
