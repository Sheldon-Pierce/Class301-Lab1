import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



class BeastForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            numberOfHorns: 0
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleSelect = (e) => {
        console.log(e.target.value);
        this.setState({numberOfHorns: e.target.value});
    }


    render () {
        return (
            <Form 
            className="mb4"
            onSubmit={this.handleSubmit}
            >
      <fieldset>
      <Form.Group className="mb-2">
          <Form.Label htmlFor="typer">Search by Text</Form.Label>
          <Form.Control 
          onChange={this.props.onChange}
          type="text"
          id="typer"
          placeholder="Search for Horned Beast" >
            
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="disabledSelect">Filter by Number of Horns</Form.Label>
          <Form.Select onChange={this.handleSelect} >
          <option value={0}></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={100}>3+</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
        )
    }


}

export default BeastForm