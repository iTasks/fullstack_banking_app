import React from 'react';
import { Form, Button } from 'react-bootstrap';

class AddAccountForm extends React.Component {
  state = {
    account_no: '',
    bank_name: '',
    ifsc: ''
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAddAccount = (event) => {
    event.preventDefault();
    this.props.handleAddAccount(this.state);
  };

  render() {
    const { account_no, bank_name, ifsc } = this.state;
    return (
      <div className="edit-account-form  col-md-6 offset-md-3">
        <Form onSubmit={this.handleAddAccount} className="account-form">
          <Form.Group controlId="type">
            <Form.Label>Add account</Form.Label>
          </Form.Group>
          <hr />
          <Form.Group controlId="accnt_no">
            <Form.Label>Account number: </Form.Label>
            <Form.Control
              type="text"
              name="account_no"
              placeholder="Enter your account number"
              value={account_no}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="accnt_no">
            <Form.Label>Bank name: </Form.Label>
            <Form.Control
              type="text"
              name="bank_name"
              placeholder="Enter your bank name"
              value={bank_name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="ifsc">
            <Form.Label>IFSC Code:</Form.Label>
            <Form.Control
              type="text"
              name="ifsc"
              placeholder="Enter new IFSC code"
              value={ifsc}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddAccountForm;
