import React, { Component } from 'react'
import {Row, Form} from 'react-bootstrap';
export default class EntryTypeSelect extends Component {

   

    render()  {            
          
        return (
            <div>
                
            <Row>
        
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label></Form.Label>
                        <Form.Control as="select" custom  onChange={this.props.handleSelect} > 
                        <option>Sales</option>
                        <option>Purchases</option>
                        <option>Bank</option>
                        <option>Cash</option>
                        <option>General Journal</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
        </div>
        )
    }
}
