import React, {Component} from 'react';
import * as emailValidator from 'email-validator';
import {Container, Col, Row, Form, FormGroup, Label, Input, Button} from 'reactstrap';


class Login extends Component {
    state = {
        email: '',
        password: '',
        isEmailValid: false,
        isPasswordValid: false,
        invalidCredentials: false
    };

    /**
     * Collect value from current active input, sets those values in local state
     * @param event
     */
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            invalidCredentials: false
        });
        if (name === 'email') {
            const isEmailValid = emailValidator.validate(value);
            this.setState({
                isEmailValid
            })
        }
        else {
            const isPasswordValid = value.length > 5;
            this.setState({
                isPasswordValid
            })
        }
    };

    /**
     * Collect login form values, set values into local state, check credentials validity
     * @param e
     */
    submitForm = (e) => {
        e.preventDefault();
        const {
            email,
            password
        } = this.state;

        // valid email is test@gmail.com / password is test123
        // this part is hard coded, it would be replaced with actual api call for authentication
        const isValid = this.validateCredentials(email, password);
        if (isValid) {
            localStorage.setItem('credentials', JSON.stringify({user: 'test@gmail.com'}));
            this.props.history.push("/");
        }
        else {
            this.setState({
                invalidCredentials: true
            })
        }
    };

    /**
     * Check if passed credentials are equal to hardcoded values
     * @param email
     * @param pass
     * @returns {boolean}
     */
    validateCredentials = (email, pass) => {
        let isValid = false;
        if (email === 'test@gmail.com' && pass === 'test123') {
            isValid = true;
        }
        return isValid;
    };

    render() {
        const {
            isEmailValid,
            isPasswordValid,
            invalidCredentials
        } = this.state;
        const credentials = isEmailValid && isPasswordValid;
        return (
            <Container className="h-100">
                <Row className="align-items-center h-100">
                    <Col sm="12" md={{size: 6, offset: 3}}>
                        <Form
                            className="p-4 border shadow-sm"
                            onSubmit={this.submitForm}>
                            <h5 className="text-uppercase mb-4">Sign In</h5>

                            <FormGroup>
                                <Label className="email-label">Email
                                     <span className="text-danger float-right">
                                        {credentials && invalidCredentials ? 'Invalid Credentials. Please, try again.' : ''}
                                     </span>
                                </Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="userEmail"
                                    placeholder="enter email address here"
                                    valid={this.state.isEmailValid}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="userPassword"
                                    placeholder="*******"
                                    valid={this.state.isPasswordValid}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <div className="clearfix">
                                <Button
                                    outline
                                    color="primary"
                                    className="float-right"
                                    disabled={!credentials}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;
