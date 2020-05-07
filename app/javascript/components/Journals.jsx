import React, { Component } from 'react'
import EntryTypeSelect from './EntryTypeSelect'
import ActiveBatch from './ActiveBatch'
import {Container, Row, Col} from 'react-bootstrap';
export default class Journals extends Component {

    constructor(props) {
        super(props)
    
        this.state = {entry_type:''}
        this.handleSelect = this.handleSelect.bind(this);
    }

     handleSelect =(e)=>{
        this.setState({entry_type: e.target.value});
        
        console.log(this.state.entry_type) 
        }



    render() {
        return (
            <div>
                <Container>
                   
                    <h1>Main Batch Entries</h1>
                        <Row>
                            <Col>
                                <EntryTypeSelect handleSelect={this.handleSelect} />
                            </Col>  
                        </Row>
                           
                </Container>
                <Container>
                <h3>Entry Type: {this.state.entry_type}</h3>
                    <Row>
                        <Col>
                            <ActiveBatch />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}