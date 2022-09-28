import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class Tube extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.outerDiameterChange = this.outerDiameterChange.bind(this);
        this.innerDiameterChange = this.innerDiameterChange.bind(this);
        this.lengthChange = this.lengthChange.bind(this);
        this.setOuterDiameterUnit = this.setOuterDiameterUnit.bind(this);
        this.setInnerDiameterUnit = this.setInnerDiameterUnit.bind(this);
        this.setLengthUnit = this.setLengthUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            outerDiameterUnit: props.units[0]['name'],
            innerDiameterUnit: props.units[0]['name'],
            lengthUnit: props.units[0]['name'],
            pi: props.pi,
            outerDiameter: 1,
            innerDiameter: 1,
            length: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    outerDiameterChange = e => {
        this.setState({ outerDiameter: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    innerDiameterChange = e => {
        this.setState({ innerDiameter: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    lengthChange = e => {
        this.setState({ length: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setOuterDiameterUnit = e => {
        this.setState({ outerDiameterUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setInnerDiameterUnit = e => {
        this.setState({ innerDiameterUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setLengthUnit = e => {
        this.setState({ lengthUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    optionList() {
        return this.state.units.map((u, i) => {
            return <option key={i} value={u.name}> {u.name} </option>;
        })
    }

    setResult() {
        if (this.state.outerDiameterUnit === this.state.innerDiameterUnit) {
            this.setState({
                result: this.state.length * this.state.pi * (Math.pow(this.state.outerDiameter, 2) - Math.pow(this.state.innerDiameter, 2)) / 4,
                outerDiameterUnitResult: 0,
                innerDiameterUnitResult: 0,
                lengthUnitResult: 0,
            });
        } else {
            this.setState({
                result: 0,
                outerDiameterUnitResult: parseFloat(this.conversionSwitch(this.state.lengthUnit + " to " + this.state.outerDiameterUnit, this.state.length)) * this.state.pi * (Math.pow(this.state.outerDiameter, 2) - Math.pow(parseFloat(this.conversionSwitch(this.state.innerDiameterUnit + " to " + this.state.outerDiameterUnit, this.state.innerDiameter)), 2))/4,
                innerDiameterUnitResult: parseFloat(this.conversionSwitch(this.state.lengthUnit + " to " + this.state.innerDiameterUnit, this.state.length)) * this.state.pi * (Math.pow(parseFloat(this.conversionSwitch(this.state.outerDiameterUnit + " to " + this.state.innerDiameterUnit, this.state.outerDiameter)), 2) - Math.pow(this.state.innerDiameter, 2))/4,
                lengthUnitResult: this.state.length * this.state.pi * (Math.pow(parseFloat(this.conversionSwitch(this.state.outerDiameterUnit + " to " + this.state.lengthUnit, this.state.outerDiameter)), 2) - Math.pow(parseFloat(this.conversionSwitch(this.state.innerDiameterUnit + " to " + this.state.lengthUnit, this.state.innerDiameter)), 2))/4,
            });
        }
    }

    getResult() {
        if (this.state.lengthUnit === this.state.outerDiameterUnit && this.state.outerDiameterUnit === this.state.innerDiameterUnit) {
            return this.state.result ? <p style={{ fontSize: 20 }}>Volume = {this.state.length}×π×({this.state.outerDiameter}²-{this.state.innerDiameter})²/4 = <strong>{this.state.result} {this.state.outerDiameterUnit}³</strong></p> : '';
        } else {
            let outerDiameterJsx = this.state.outerDiameterUnitResult ? <p key="3" style={{ fontSize: 20 }}>Volume = {parseFloat(this.conversionSwitch(this.state.lengthUnit + " to " + this.state.outerDiameterUnit, this.state.length))}×π×({this.state.outerDiameter}²-{parseFloat(this.conversionSwitch(this.state.innerDiameterUnit + " to " + this.state.outerDiameterUnit, this.state.innerDiameter))})²/4 = <strong>{this.state.outerDiameterUnitResult} {this.state.outerDiameterUnit}³</strong></p> : '';
            let innerDiameterJsx = this.state.outerDiameterUnitResult ? <p key="5" style={{ fontSize: 20 }}>Volume = {parseFloat(this.conversionSwitch(this.state.lengthUnit + " to " + this.state.innerDiameterUnit, this.state.length))}×π×({parseFloat(this.conversionSwitch(this.state.outerDiameterUnit + " to " + this.state.innerDiameterUnit, this.state.outerDiameter))}² - {this.state.innerDiameter}²)/4 = <strong>{this.state.innerDiameterUnitResult} {this.state.innerDiameterUnit}³</strong></p> : '';
            let lengthJsx = this.state.lengthUnitResult ? <p key="1" style={{ fontSize: 20 }}>Volume = {this.state.length}×π×({parseFloat(this.conversionSwitch(this.state.outerDiameterUnit + " to " + this.state.lengthUnit, this.state.outerDiameter))}²-{parseFloat(this.conversionSwitch(this.state.innerDiameterUnit + " to " + this.state.lengthUnit, this.state.innerDiameter))}²)/4 = <strong>{this.state.lengthUnitResult} {this.state.lengthUnit}³</strong></p> : '';

            if (this.state.lengthUnit === this.state.outerDiameterUnit)
                return ([lengthJsx, <p key="4">Or</p>, innerDiameterJsx]);

            else if (this.state.lengthUnit === this.state.innerDiameterUnit)
                return ([lengthJsx, <p key="2">Or</p>, outerDiameterJsx]);
            else
                return ([lengthJsx, <p key="2">Or</p>, outerDiameterJsx, <p key="4">Or</p>, innerDiameterJsx]);
        }
    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/tube.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Outer Diameter (<i>d1</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.outerDiameter} onChange={this.outerDiameterChange} placeholder="Outer Diameter" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.outerDiameterUnit} onChange={this.setOuterDiameterUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Inner Diameter (<i>d2</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.innerDiameter} onChange={this.innerDiameterChange} placeholder="Inner Diameter" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.innerDiameterUnit} onChange={this.setInnerDiameterUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Length (<i>l</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.length} onChange={this.lengthChange} placeholder="Length" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.lengthUnit} onChange={this.setLengthUnit}>
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

export default Tube;