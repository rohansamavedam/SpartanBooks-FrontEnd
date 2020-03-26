import React, { useState } from 'react';
import { Container, Button, Modal, Form, Row, Col} from 'react-bootstrap';

const Addbook = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
            <Button variant="danger" onClick={handleShow} style={{height: '40px', width: '120px'}}>Add Book</Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <h4>Fill the form to add book</h4>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Book Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Class Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="number" placeholder="Class Number" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="number" placeholder="Price" />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Book Condition
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="excellent"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="good"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                label="average"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Book Description" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Book Image Link" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Book
                </Button>
                </Modal.Footer>
            </Modal>
        </Container> 
    );
}

export default Addbook;