import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="outline-dark"
        style={{ color: "white" }}
        onClick={handleShow}
        className="ms-2"
      >
        <i className="fa  fa-user-plus"></i> Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form className="container mb-2 py-3 mx-auto">
          <h2>REGISTER</h2>
          <hr></hr>
          <Button variant="outline-dark " className="w-100 mb-2 " type="submit">
            <span className="fa fa-google  me-2"></span>Sign Up With Google
          </Button>
          <Button variant="outline-dark " className="w-100 mb-2 " type="submit">
            <span className="fa fa-facebook  me-2"></span>Sign Up With Facebook
          </Button>
          <Form.Group className="mb-4 mt-2" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-4 mt-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-dark " className="w-100 mt-2" type="submit">
            REGISTER
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default Signup;
