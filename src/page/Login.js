import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate("/");
    }

    return (
        <div>
            <Container className='login-form-box'>

                <Form className='login-form' onSubmit={(e) => loginUser(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Login
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default Login