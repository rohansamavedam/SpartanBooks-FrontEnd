import React from 'react';
import { Container, Form, Button} from 'react-bootstrap';

const Signup = (props) => {
    return(
        <Container>
            <h3>Signup</h3>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter Password"/>
                </Form.Group>
                <Button variant="primary" onClick={() => props.signup()}>
                    Signup
                </Button>
            </Form>
         </Container>   
    );
}

export default Signup;