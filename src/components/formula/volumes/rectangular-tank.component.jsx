import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class RectangularTank extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.lengthChange = this.lengthChange.bind(this);
        this.widthChange = this.widthChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.setLengthUnit = this.setLengthUnit.bind(this);
        this.setWidthUnit = this.setWidthUnit.bind(this);
        this.setHeightUnit = this.setHeightUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            lengthUnit: props.units[0]['name'],
            widthUnit: props.units[0]['name'],
            heightUnit: props.units[0]['name'],
            pi: props.pi,
            length: 1,
            width: 1,
            height: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    lengthChange = e => {
        this.setState({ length: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    widthChange = e => {
        this.setState({ width: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    heightChange = e => {
        this.setState({ height: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setLengthUnit = e => {
        this.setState({ lengthUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setWidthUnit = e => {
        this.setState({ widthUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setHeightUnit = e => {
        this.setState({ heightUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    optionList() {
        return this.state.units.map((u, i) => {
            return <option key={i} value={u.name}> {u.name} </option>;
        })
    }

    setResult() {
        if (this.state.widthUnit === this.state.heightUnit) {
            this.setState({
                result: this.state.length * this.state.width * this.state.height,
                lengthUnitResult: 0,
                widthUnitResult: 0,
                heightUnitResult: 0,
            });
        } else {
            this.setState({
                result: 0,
                lengthUnitResult: this.state.length * parseFloat(this.conversionSwitch(this.state.widthUnit + " to " + this.state.lengthUnit, this.state.width || 0)) * parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.lengthUnit, this.state.height || 0)),
                widthUnitResult: parseFloat(this.conversionSwitch(this.state.lengthUnit + " to " + this.state.widthUnit, this.state.length || 0)) * this.state.width * parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.widthUnit, this.state.height || 0)),
                heightUnitResult: parseFloat(this.conversionSwitch(this.state.lengthUnit + " to " + this.state.heightUnit, this.state.length || 0)) * parseFloat(this.conversionSwitch(this.state.widthUnit + " to " + this.state.heightUnit, this.state.width || 0)) * this.state.height,
            });
        }
    }

    getResult() {
        if (this.state.lengthUnit === this.state.widthUnit && this.state.widthUnit === this.state.heightUnit) {
            return this.state.result ? <p style={{ fontSize: 20 }}>Volume = {this.state.length}×{this.state.width}×{this.state.height} = <strong>{this.state.result} {this.state.widthUnit}³</strong></p> : '';
        } else {
            let lengthJsx = this.state.lengthUnitResult ? <p key="1" style={{ fontSize: 20 }}>Volume = {this.state.length}×{this.conversionSwitch(this.state.widthUnit + " to " + this.state.lengthUnit, this.state.width || 0)}×{parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.lengthUnit, this.state.height || 0))} = <strong>{this.state.lengthUnitResult} {this.state.lengthUnit}³</strong></p> : '';
            let widthJsx = this.state.widthUnitResult ? <p key="3" style={{ fontSize: 20 }}>Volume = {this.conversionSwitch(this.state.lengthUnit + " to " + this.state.widthUnit, this.state.length || 0)}×{this.state.width}×{this.conversionSwitch(this.state.heightUnit + " to " + this.state.widthUnit, this.state.height || 0)} = <strong>{this.state.widthUnitResult} {this.state.widthUnit}³</strong></p> : '';
            let heightJsx = this.state.widthUnitResult ? <p key="5" style={{ fontSize: 20 }}>Volume = {this.conversionSwitch(this.state.lengthUnit + " to " + this.state.heightUnit, this.state.length || 0)}×{this.conversionSwitch(this.state.widthUnit + " to " + this.state.heightUnit, this.state.width || 0)}×{this.state.height} = <strong>{this.state.heightUnitResult} {this.state.heightUnit}³</strong></p> : '';
            
            if (this.state.lengthUnit === this.state.widthUnit)
                return ([lengthJsx, <p key="4">Or</p>, heightJsx]);

            else if (this.state.lengthUnit === this.state.heightUnit)
                return ([lengthJsx, <p key="2">Or</p>, widthJsx]);
            else 
                return ([lengthJsx, <p key="2">Or</p>, widthJsx, <p key="4">Or</p>, heightJsx]);
        }

    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/prism.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
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
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        <strong>Width (<i>w</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.width} onChange={this.widthChange} placeholder="Width" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.widthUnit} onChange={this.setWidthUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        <strong>Height (<i>h</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.height} onChange={this.heightChange} placeholder="Height" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.heightUnit} onChange={this.setHeightUnit}>
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

export default RectangularTank;