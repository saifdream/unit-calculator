import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class Cube extends Component {
    constructor(props) {
        super(props);
        this.unitValueChange = this.unitValueChange.bind(this);
        this.setUnit = this.setUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            unit: props.units[0]['name'],
            unitValue: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    unitValueChange = e => {
        this.setState({ unitValue: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setUnit = e => {
        this.setState({ unit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    optionList() {
        return this.state.units.map((u, i) => {
            return <option key={i} value={u.name}> {u.name} </option>;
        })
    }

    setResult() {
        this.setState({ result: Math.pow(this.state.unitValue, 3) });
    }

    getResult() {
        return this.state.result ? <p style={{fontSize: 20}}>Volume = {this.state.unitValue}³ = <strong>{this.state.result} {this.state.unit}³</strong></p> : '';
    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/cube.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Edge Length (<i>a</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.unitValue} onChange={this.unitValueChange} placeholder="Edge Length" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.unit} onChange={this.setUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
                        {this.getResult()}
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Cube;