import React, { Component } from 'react';
import Book from '../components/Book';
import Delete from '../components/Delete';
import Addbook from '../components/Addbook';
import Profile from '../components/Profile';
import { Container, Row, Col, InputGroup, FormControl, Button, Pagination} from 'react-bootstrap';

class Mainpage extends Component{ 
    constructor() {
        super();
        this.state = {
        }

    }

    // We can delcare any other methods we want here.

    render(){
        return (
            <div className="tc">
                <Container>
                    <Row>
                        <Col>
                            <br></br>
                            <h1>Spartan Books</h1>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search for a book"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <br></br>
                            <Button variant="info" onClick={() => this.props.logout()} style={{height: '40px', width: '120px'}}>Logout</Button><hr></hr>
                            <Profile/>
                        </Col>
                        <Col>
                            <br></br>
                            <Addbook/><hr></hr>
                            <Delete/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><Book/></Col>
                        <Col><Book/></Col>
                        <Col><Book/></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><Book/></Col>
                        <Col><Book/></Col>
                        <Col><Book/></Col>
                    </Row>
                </Container>
                <Pagination style={{marginLeft: '50%', marginRight: '50%', marginTop: '20px'}}>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </div>
        );
    }
}

export default Mainpage;