import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class SphericalCap extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.baseRadiusChange = this.baseRadiusChange.bind(this);
        this.ballRadiusChange = this.ballRadiusChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.setBaseRadiusUnit = this.setBaseRadiusUnit.bind(this);
        this.setBallRadiusUnit = this.setBallRadiusUnit.bind(this);
        this.setHeightUnit = this.setHeightUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            baseRadiusUnit: props.units[0]['name'],
            ballRadiusUnit: props.units[0]['name'],
            heightUnit: props.units[0]['name'],
            pi: props.pi,
            baseRadius: '',
            ballRadius: '',
            height: '',
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    baseRadiusChange = e => {
        this.setState({ baseRadius: e.target.value }, () => {
            this.setResult();
        });
    }

    ballRadiusChange = e => {
        this.setState({ ballRadius: e.target.value }, () => {
            this.setResult();
        });
    }

    heightChange = e => {
        this.setState({ height: e.target.value }, () => {
            this.setResult();
        });
    }

    setBaseRadiusUnit = e => {
        this.setState({ baseRadiusUnit: e.target.value }, () => {
            this.setResult();
        });
    }

    setBallRadiusUnit = e => {
        this.setState({ ballRadiusUnit: e.target.value }, () => {
            this.setResult();
        });
    }

    setHeightUnit = e => {
        this.setState({ heightUnit: e.target.value }, () => {
            this.setResult();
        });
    }

    optionList() {
        return this.state.units.map((u, i) => {
            return <option key={i} value={u.name}> {u.name} </option>;
        })
    }

    setResult() {
        let baseRadius = this.state.baseRadius || 0; // r
        let ballRadius = this.state.ballRadius || 0; // R
        let height = this.state.height || 0; // h
        let errorMsg = "";
        let conversionUnit = (this.state.baseRadius && this.state.baseRadiusUnit) || (this.state.ballRadius && this.state.ballRadiusUnit) || (this.state.height && this.state.heightUnit);

        this.setState({
            gotBaseRadius: '',
            gotBallRadius: '',
            gotHeight: '',
        });

        if (ballRadius && height && !baseRadius) { 
            /* Given R and h: r = √(2Rh - h 2 ) */
            let _2Rh = 2 * ballRadius * parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + conversionUnit, height));
            let hSqrt = Math.pow(parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + conversionUnit, height)), 2);

            if (_2Rh < hSqrt) errorMsg = "Height cannot be larger than ball radius.";
            baseRadius = Math.pow(_2Rh - hSqrt, 1 / 2);
            this.setState({
                gotBaseRadius: baseRadius,
            });
        } else if (baseRadius && ballRadius && !height) { 
            /* Given r and R: h = R - √(R 2  - r 2 ) */
            let base = Math.pow(parseFloat(this.conversionSwitch(this.state.baseRadiusUnit + " to " + conversionUnit, baseRadius)), 2);
            let ball = Math.pow(ballRadius, 2);

            height = ballRadius - Math.pow(ball - base, 1 / 2);
            this.setState({
                gotHeight: height,
            });
        } else if (baseRadius && height && !ballRadius) { 
            /* Given r and h: R = (h 2  + r 2 )/2h */
            ballRadius = (Math.pow(parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + conversionUnit, height)), 2) + Math.pow(baseRadius, 2)) / (2 * parseFloat(this.conversionSwitch(this.state.heightUnit + " to " + this.state.baseRadiusUnit, height)));
            this.setState({
                gotBallRadius: ballRadius,
            });
        }

        if (ballRadius < baseRadius) errorMsg = "Base radius cannot be larger than ball radius.";

        /* volume = 1/3 πh2(3R - h) */
        this.setState({
            errorMsg: errorMsg,
            conversionUnit: conversionUnit,
            result: 1 / 3 * this.state.pi * Math.pow(height, 2) * (3 * ballRadius - height),
            eq: "1/3 π×" + height + "² (3×" + ballRadius + " - " + height + ")"
        });
    }

    getResult() {
        if (this.state.errorMsg) return '';
        return this.state.result ? <p style={{ fontSize: 20 }}>Volume = {this.state.eq} = <strong>{this.state.result} {this.state.conversionUnit}³</strong></p> : '';
    }

    getErrorMsg() {
        return this.state.errorMsg ? <p style={{ fontSize: 20 }}><strong>{this.state.errorMsg}</strong></p> : '';
    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/cap.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Base Radius (<i>r</i>)</strong>
                    </Form.Label>
                    <Col sm="4" style={{ textAlign: 'center' }}>
                        <Form.Control type="number" value={this.state.baseRadius} onChange={this.baseRadiusChange} placeholder="Base Radius" /> {this.state.gotBaseRadius || ''}
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.baseRadiusUnit} onChange={this.setBaseRadiusUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Ball Radius (<i>R</i>)</strong>
                    </Form.Label>
                    <Col sm="4" style={{ textAlign: 'center' }}>
                        <Form.Control type="number" value={this.state.ballRadius} onChange={this.ballRadiusChange} placeholder="Ball Radius" /> {this.state.gotBallRadius || ''}
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.ballRadiusUnit} onChange={this.setBallRadiusUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Height (<i>h</i>)</strong>
                    </Form.Label>
                    <Col sm="4" style={{ textAlign: 'center' }}>
                        <Form.Control type="number" value={this.state.height} onChange={this.heightChange} placeholder="Height" /> {this.state.gotHeight || ''}
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
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20, color: "red" }}>
                        {this.getErrorMsg()}
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default SphericalCap;