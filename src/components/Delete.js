import React, { useState } from 'react';
import { Container, Button, Modal} from 'react-bootstrap';

const Delete = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
            <Button variant="danger" onClick={handleShow} style={{height: '40px', width: '120px'}}>Delete Book</Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <h4>Select the book you want to delete</h4>
                </Modal.Header>
                <Modal.Body>
                    This is the Body
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Container> 
    );
}

export default Delete;