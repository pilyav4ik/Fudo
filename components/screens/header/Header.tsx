import Image from "next/image";
import { FC } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../../../public/Logo.png';
import Girl from '../../../public/Girl.png';
import { Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <Container>
            <Row>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#"><Image src={Logo} width={2} height={1} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Review</Nav.Link>
                            <Nav.Link href="#action1">About Us</Nav.Link>
                            <Nav.Link href="#action2">Contact Us</Nav.Link>
                        </Nav>
                        <Form className="d-flex grid gap-2">
                            <Button variant="btn btn-outline-danger rounded-3">Sign in</Button>
                            <Button variant="btn btn-danger rounded-3">Sign up</Button>
                        </Form>
                    </Navbar.Collapse>

                </Navbar>
            </Row>

            <Row className="pb-5">
                <Col className="header col-7">
                    <span className="quality">Quality Food</span>
                    <span className="delivery">
                        Fastest <i>Delivery</i> & Easy <i>Pickup</i>
                    </span>
                    <span className="bestcooks">
                        Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
                    </span>
                    <div>
                        <form className="row g-2">
                            <div className="col-8 p-0">
                                <input type="text" className="form-control  form-control-lg rounded-start" id="" placeholder="Enter your delivery location" />
                            </div>
                            <div className="col-auto p-0">
                                <button type="submit" className="btn mb-3  btn-lg">Discover &#62; </button>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col className="text-end p-0 col-5"><Image src={Girl} alt="" /></Col>
            </Row>
        </Container>
    )
}

export default Header