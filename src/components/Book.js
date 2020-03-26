import React, { useState } from 'react';
import { Container, Card, Button, Modal} from 'react-bootstrap';

const Book = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://bestapbooks.com/wp-content/uploads/2016/08/51zJzrhC3nL._SX419_BO1204203200_-253x300.jpg" />
                <Card.Body>
                    {/* <Card.Title>Book Name</Card.Title> */}
                    <Card.Text>
                        US History,
                        Price: 35$
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Buy Book</Button>
                </Card.Body>
            </Card> 
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <h4>Book Name</h4>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                <Button variant="primary" onClick={handleClose}>
                    Buy this book
                </Button>
                </Modal.Footer>
            </Modal>
        </Container> 
    );
}

export default Book;