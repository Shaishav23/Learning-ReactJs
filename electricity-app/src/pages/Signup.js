import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap'
import Base from '../components/Base'

const Signup = () => {
    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color="dark" inverse>
                            <CardHeader>
                                <h3>Add Information to Register.</h3>
                            </CardHeader>
                            <CardBody>
                                {/*creating form*/}
                                <Form>
                                    {/* Name Field */}
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter Here"
                                            id="name"
                                        />
                                    </FormGroup>

                                    {/* Address Field */}
                                    <FormGroup>
                                        <Label for="address">
                                            Enter Address
                                        </Label>
                                        <Input
                                            type="address"
                                            placeholder="Enter Here"
                                            id="address"
                                        />
                                    </FormGroup>

                                    {/* Email Field */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter Here"
                                            id="email"
                                        />
                                    </FormGroup>

                                    {/* Password Field */}
                                    <FormGroup>
                                        <Label for="password">
                                            Enter Password
                                        </Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter Here"
                                            id="password"
                                        />
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button color="light" outline>
                                            Register
                                        </Button>
                                        <Button
                                            color="secondary"
                                            outline
                                            type="reset"
                                            className="ms-2"
                                        >
                                            Reset
                                        </Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Signup
