import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class ConicalFrustum extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.topRadiusChange = this.topRadiusChange.bind(this);
        this.bottomRadiusChange = this.bottomRadiusChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.setTopRadiusUnit = this.setTopRadiusUnit.bind(this);
        this.setBottomRadiusUnit = this.setBottomRadiusUnit.bind(this);
        this.setHeightUnit = this.setHeightUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            topRadiusUnit: props.units[0]['name'],
            bottomRadiusUnit: props.units[0]['name'],
            heightUnit: props.units[0]['name'],
            pi: props.pi,
            topRadius: 1,
            bottomRadius: 1,
            height: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    topRadiusChange = e => {
        this.setState({ topRadius: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    bottomRadiusChange = e => {
        this.setState({ bottomRadius: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    heightChange = e => {
        this.setState({ height: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setTopRadiusUnit = e => {
        this.setState({ topRadiusUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setBottomRadiusUnit = e => {
        this.setState({ bottomRadiusUnit: e.target.value || 0 }, () => {
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
        if (this.state.bottomRadiusUnit === this.state.heightUnit) {
            this.setState({
                result: 1 / 3 * this.state.pi * this.state.height * (Math.pow(this.state.topRadius, 2) + this.state.topRadius * this.state.bottomRadius + Math.pow(this.state.bottomRadius, 2)),
                topRadiusUnitResult: 0,
                bottomRadiusUnitResult: 0,
                heightUnitResult: 0,
            });
        } else {
            this.setState({
                result: 0,
                topRadiusUnitResult: 1 / 3 * this.state.pi * parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.topRadiusUnit, this.state.height)) * (Math.pow(this.state.topRadius, 2) + this.state.topRadius * parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.topRadiusUnit, this.state.bottomRadius)) + Math.pow(parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.topRadiusUnit, this.state.bottomRadius)), 2)),
                bottomRadiusUnitResult: 1 / 3 * this.state.pi * parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.bottomRadiusUnit, this.state.height)) * (Math.pow(parseFloat(this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.bottomRadiusUnit, this.state.topRadius)), 2) + this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.bottomRadiusUnit, this.state.topRadius) * this.state.bottomRadius + Math.pow(this.state.bottomRadius, 2)),
                heightUnitResult: 1 / 3 * this.state.pi * this.state.height * (Math.pow(parseFloat(this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.heightUnit, this.state.topRadius)), 2) + parseFloat(this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.heightUnit, this.state.topRadius)) * parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.heightUnit, this.state.bottomRadius)) + Math.pow(parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.heightUnit, this.state.bottomRadius)), 2)),
            });
        }
    }

    getResult() {
        if (this.state.topRadiusUnit === this.state.bottomRadiusUnit && this.state.bottomRadiusUnit === this.state.heightUnit) {
            return this.state.result ? <p style={{ fontSize: 20 }}>Volume = 1/3×π×{this.state.height}×({this.state.topRadius}²+{this.state.topRadius}×{this.state.bottomRadius}+{this.state.bottomRadius}²) = <strong>{this.state.result} {this.state.bottomRadiusUnit}³</strong></p> : '';
        } else {
            let topRadiusJsx = this.state.topRadiusUnitResult ? <p key="1" style={{ fontSize: 20 }}>Volume = 1/3* π×{parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.topRadiusUnit, this.state.height))}×({this.state.topRadius}²+{this.state.topRadius}×{parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.topRadiusUnit, this.state.bottomRadius))}+{parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.topRadiusUnit, this.state.bottomRadius))}²) = <strong>{this.state.topRadiusUnitResult} {this.state.topRadiusUnit}³</strong></p> : '';
            let bottomRadiusJsx = this.state.bottomRadiusUnitResult ? <p key="3" style={{ fontSize: 20 }}>Volume = 1 / 3 *π*{parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.bottomRadiusUnit, this.state.height))}*({parseFloat(this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.bottomRadiusUnit, this.state.topRadius))}²+{this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.bottomRadiusUnit, this.state.topRadius)}*{this.state.bottomRadius}+{this.state.bottomRadius}²) = <strong>{this.state.bottomRadiusUnitResult} {this.state.bottomRadiusUnit}³</strong></p> : '';
            let heightJsx = this.state.bottomRadiusUnitResult ? <p key="5" style={{ fontSize: 20 }}>Volume = 1/3 *π*{this.state.height}*({parseFloat(this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.heightUnit, this.state.topRadius))}²+{parseFloat(this.conversionSwitch(this.state.topRadiusUnit + " to " + this.state.heightUnit, this.state.topRadius))}*{parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.heightUnit, this.state.bottomRadius))}+{parseFloat(this.conversionSwitch(this.state.bottomRadiusUnit + " to " + this.state.heightUnit, this.state.bottomRadius))}²) = <strong>{this.state.heightUnitResult} {this.state.heightUnit}³</strong></p> : '';

            if (this.state.topRadiusUnit === this.state.bottomRadiusUnit)
                return ([topRadiusJsx, <p key="4">Or</p>, heightJsx]);

            else if (this.state.topRadiusUnit === this.state.heightUnit)
                return ([topRadiusJsx, <p key="2">Or</p>, bottomRadiusJsx]);
            else
                return ([topRadiusJsx, <p key="2">Or</p>, bottomRadiusJsx, <p key="4">Or</p>, heightJsx]);
        }

    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/conical-frustum.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Top Radius (<i>r</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.topRadius} onChange={this.topRadiusChange} placeholder="Top Radius" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.topRadiusUnit} onChange={this.setTopRadiusUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Bottom Radius (<i>R</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.bottomRadius} onChange={this.bottomRadiusChange} placeholder="Bottom Radius" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.bottomRadiusUnit} onChange={this.setBottomRadiusUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
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

export default ConicalFrustum;