import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PersonalInfo = () => {
    return (
      <Form>
      <Form.Group className="mb-3" controlId="formtext">
        <Form.Label>Secret 1</Form.Label>
        <Form.Control type="text" placeholder="Personal Info" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formtext">
        <Form.Label>Secret 2</Form.Label>
        <Form.Control type="text" placeholder="Personal Info" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formtext">
        <Form.Label>Secret 3</Form.Label>
        <Form.Control type="text" placeholder="Personal Info" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
}

export default PersonalInfo;
