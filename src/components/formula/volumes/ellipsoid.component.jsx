import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class Ellipsoid extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.axisOneChange = this.axisOneChange.bind(this);
        this.axisTwoChange = this.axisTwoChange.bind(this);
        this.axisThreeChange = this.axisThreeChange.bind(this);
        this.setAxisOneUnit = this.setAxisOneUnit.bind(this);
        this.setAxisTwoUnit = this.setAxisTwoUnit.bind(this);
        this.setAxisThreeUnit = this.setAxisThreeUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            axisOneUnit: props.units[0]['name'],
            axisTwoUnit: props.units[0]['name'],
            axisThreeUnit: props.units[0]['name'],
            pi: props.pi,
            axisOne: 1,
            axisTwo: 1,
            axisThree: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    axisOneChange = e => {
        this.setState({ axisOne: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    axisTwoChange = e => {
        this.setState({ axisTwo: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    axisThreeChange = e => {
        this.setState({ axisThree: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setAxisOneUnit = e => {
        this.setState({ axisOneUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setAxisTwoUnit = e => {
        this.setState({ axisTwoUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setAxisThreeUnit = e => {
        this.setState({ axisThreeUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    optionList() {
        return this.state.units.map((u, i) => {
            return <option key={i} value={u.name}> {u.name} </option>;
        })
    }

    setResult() {
        if (this.state.axisOneUnit === this.state.axisTwoUnit) {
            this.setState({
                result: 4/3 * this.state.pi * this.state.axisOne * this.state.axisTwo * this.state.axisThree,
                axisOneUnitResult: 0,
                axisTwoUnitResult: 0,
                axisThreeUnitResult: 0,
            });
        } else {
            this.setState({
                result: 0,
                axisOneUnitResult: 4/3 * this.state.pi * this.state.axisOne * parseFloat(this.conversionSwitch(this.state.axisTwoUnit + " to " + this.state.axisOneUnit, this.state.axisTwo)) * parseFloat(this.conversionSwitch(this.state.axisThreeUnit + " to " + this.state.axisOneUnit, this.state.axisThree)),
                axisTwoUnitResult: 4/3 * this.state.pi * parseFloat(this.conversionSwitch(this.state.axisOneUnit + " to " + this.state.axisTwoUnit, this.state.axisOne)) * this.state.axisTwo * parseFloat(this.conversionSwitch(this.state.axisThreeUnit + " to " + this.state.axisTwoUnit, this.state.axisThree)),
                axisThreeUnitResult: 4/3 * this.state.pi * parseFloat(this.conversionSwitch(this.state.axisOneUnit + " to " + this.state.axisThreeUnit, this.state.axisOne)) * parseFloat(this.conversionSwitch(this.state.axisTwoUnit + " to " + this.state.axisThreeUnit, this.state.axisTwo)) * this.state.axisThree,
            });
        }
    }

    getResult() {
        if (this.state.axisThreeUnit === this.state.axisOneUnit && this.state.axisOneUnit === this.state.axisTwoUnit) {
            return this.state.result ? <p style={{ fontSize: 20 }}>Volume = 4/3×π×{this.state.axisOne}×{this.state.axisTwo}×{this.state.axisThree} = <strong>{this.state.result} {this.state.axisOneUnit}³</strong></p> : '';
        } else {
            let axisOneJsx = this.state.axisOneUnitResult ? <p key="3" style={{ fontSize: 20 }}>Volume =  4/3×π×{this.state.axisOne}×{parseFloat(this.conversionSwitch(this.state.axisTwoUnit + " to " + this.state.axisOneUnit, this.state.axisTwo))}×{parseFloat(this.conversionSwitch(this.state.axisThreeUnit + " to " + this.state.axisOneUnit, this.state.axisThree))} = <strong>{this.state.axisOneUnitResult} {this.state.axisOneUnit}³</strong></p> : '';
            let axisTwoJsx = this.state.axisOneUnitResult ? <p key="5" style={{ fontSize: 20 }}>Volume = 4/3×π×{parseFloat(this.conversionSwitch(this.state.axisOneUnit + " to " + this.state.axisTwoUnit, this.state.axisOne))}×{this.state.axisTwo}×{parseFloat(this.conversionSwitch(this.state.axisThreeUnit + " to " + this.state.axisTwoUnit, this.state.axisThree))} = <strong>{this.state.axisTwoUnitResult} {this.state.axisTwoUnit}³</strong></p> : '';
            let axisThreeJsx = this.state.axisThreeUnitResult ? <p key="1" style={{ fontSize: 20 }}>Volume = 4/3×π×{parseFloat(this.conversionSwitch(this.state.axisOneUnit + " to " + this.state.axisThreeUnit, this.state.axisOne))}×{parseFloat(this.conversionSwitch(this.state.axisTwoUnit + " to " + this.state.axisThreeUnit, this.state.axisTwo))}×{this.state.axisThree} = <strong>{this.state.axisThreeUnitResult} {this.state.axisThreeUnit}³</strong></p> : '';

            if (this.state.axisThreeUnit === this.state.axisOneUnit)
                return ([axisThreeJsx, <p key="4">Or</p>, axisTwoJsx]);

            else if (this.state.axisThreeUnit === this.state.axisTwoUnit)
                return ([axisThreeJsx, <p key="2">Or</p>, axisOneJsx]);
            else
                return ([axisThreeJsx, <p key="2">Or</p>, axisOneJsx, <p key="4">Or</p>, axisTwoJsx]);
        }
    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/ellipsoid.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        <strong>Axis 1 (<i>a</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.axisOne} onChange={this.axisOneChange} placeholder="Axis 1" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.axisOneUnit} onChange={this.setAxisOneUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        <strong>Axis 2 (<i>b</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.axisTwo} onChange={this.axisTwoChange} placeholder="Axis 2" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.axisTwoUnit} onChange={this.setAxisTwoUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        <strong>Axis 3 (<i>c</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.axisThree} onChange={this.axisThreeChange} placeholder="Axis 3" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.axisThreeUnit} onChange={this.setAxisThreeUnit}>
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

export default Ellipsoid;