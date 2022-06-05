import React from 'react'
import { Button, Form } from "react-bootstrap";
import CreateTour from './CreateTour';

const PrijaviPutovanja = () => {
  return (
    <div class="container">
      <div class="row d-flex justify-content-center pt-4 pb-4">
        <Form>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div >

      <div class="row d-flex justify-content-center pt-4 pb-4">
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CreateTour />
        </div>
        <div class="col-md-3 col-xs-3  col-sm-3 col-lg-3 pb-3">
          <CreateTour />
        </div>
      </div> 
    </div>
  )
}

export default PrijaviPutovanja