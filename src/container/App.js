import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Mainpage from './Mainpage';
import { Container, Row, Col} from 'react-bootstrap';

class App extends Component{ 
    constructor() {
        super();
        this.state = {
            signedin: false,
            authenticated: false
        }

    }

    // We can delcare any other methods we want here.

    login = () => {
        this.setState({signedin: true, authenticated: true});
    }

    signup = () => {
        this.setState({signedin: true, authenticated: true});
    }

    logout = () => {
        this.setState({signedin: false, authenticated: false});
    }


    render(){
        const { signedin } = this.state;
        return (
            <div>
                {/* Conditional Rendering */}
                {
                    signedin === false
                    ? 
                    <div>
                        <h1>Spartan Books</h1>
                        <Container>
                            <Row> 
                                <Col><Login login={this.login}/></Col>
                                <Col> <Signup signup={this.signup}/></Col>
                            </Row>
                        </Container>
                    </div>    
                    :<Mainpage logout={this.logout}/>
                }
            </div>
        );
    }
}

export default App;