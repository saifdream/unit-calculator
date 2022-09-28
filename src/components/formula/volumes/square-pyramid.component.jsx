import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class SquarePyramid extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.edgeChange = this.edgeChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.setEdgeUnit = this.setEdgeUnit.bind(this);
        this.setHeightUnit = this.setHeightUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            edgeUnit: props.units[0]['name'],
            heightUnit: props.units[0]['name'],
            pi: props.pi,
            edge: 1,
            height: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    edgeChange = e => {
        this.setState({ edge: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    heightChange = e => {
        this.setState({ height: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setEdgeUnit = e => {
        this.setState({ edgeUnit: e.target.value || 0 }, () => {
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
        if (this.state.edgeUnit === this.state.heightUnit) {
            this.setState({
                result: 1 / 3 * Math.pow(this.state.edge, 2) * this.state.height,
                edgeUnitResult: 0,
                heightUnitResult: 0,
            });
        } else {
            let heightUnitToEdgeUnit = this.conversionSwitch(this.state.heightUnit + " to " + this.state.edgeUnit, this.state.height || 0);
            let edgeUnitToHeightUnit = this.conversionSwitch(this.state.edgeUnit + " to " + this.state.heightUnit, this.state.edge || 0);
            this.setState({
                result: 0,
                heightUnitToEdgeUnit: heightUnitToEdgeUnit,
                edgeUnitToHeightUnit: edgeUnitToHeightUnit,
                edgeUnitResult: 1 / 3 * Math.pow(this.state.edge, 2) * parseFloat(heightUnitToEdgeUnit),
                heightUnitResult: 1 / 3 * Math.pow(parseFloat(edgeUnitToHeightUnit), 2) * this.state.height,
            });
        }
    }

    getResult() {
        if (this.state.edgeUnit === this.state.heightUnit) {
            return this.state.result ? <p style={{ fontSize: 20 }}>Volume = π×{this.state.edge}²×{this.state.height} = <strong>{this.state.result} {this.state.edgeUnit}³</strong></p> : '';
        } else {
            let edgeJsx = this.state.edgeUnitResult ? <p key="1" style={{ fontSize: 20 }}>Volume = 1/3×{this.state.edge}²×{this.state.heightUnitToEdgeUnit} = <strong>{this.state.edgeUnitResult} {this.state.edgeUnit}³</strong></p> : '';
            let heightJsx = this.state.edgeUnitResult ? <p key="3" style={{ fontSize: 20 }}>Volume = 1/3×{this.state.edgeUnitToHeightUnit}²×{this.state.height} = <strong>{this.state.heightUnitResult} {this.state.heightUnit}³</strong></p> : '';
            return ([edgeJsx, <p key="2">Or</p>, heightJsx]);
        }
    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/square-pyramid.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Base Edge (<i>r</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.edge} onChange={this.edgeChange} placeholder="Edge" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.edgeUnit} onChange={this.setEdgeUnit}>
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

export default SquarePyramid;