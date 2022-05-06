import React from "react";
import styles from './style.module.css'
import { Row, Col } from "reactstrap";

export default class CampaignForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'bla',
            email: 'bla',
            firstName: 'bla',
            lastName: 'bla',
            phone: 'bla',
            address1: 'bla',
            zip5: 'bla'
        }
    }

    handleInput = (event) => {
        const name = event.target.name
        const newState = {}
        newState[name] = event.target.value
        this.setState(newState)
        event.preventDefault()
      }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state)
        console.log('cURL Maglev')
    }

    render(){

        return (
            <div>
                <h3>CampaignForm</h3>

                <form onSubmit={this.submitForm}>
                    <Row>
                        <Col sm>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <label htmlFor="address1">Address</label>
                            <input type="text" name="address1" value={this.state.address1} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <label htmlFor="zip5">Zip5</label>
                            <input type="text" name="zip5" value={this.state.zip5} onChange={this.handleInput} required />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <button type="submit">Take Action</button>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}
