import React, { Component } from "react";
import { Container, Tab, Row, Col, Form, ListGroup } from 'react-bootstrap';

import Sphere from "./volumes/sphere.component";
import Cone from "./volumes/cone.component";
import Cube from "./volumes/cube.component";
import Cylinder from "./volumes/cylinder.component";
import RectangularTank from "./volumes/rectangular-tank.component";
import Capsule from "./volumes/capsule.component";
import SphericalCap from "./volumes/spherical-cap.component";
import ConicalFrustum from "./volumes/conical-frustum.component";
import Ellipsoid from "./volumes/ellipsoid.component";
import SquarePyramid from "./volumes/square-pyramid.component";
import Tube from "./volumes/tube.component";

class Volumes extends Component {
    pi = 3.1416;
    calculators = [
        { id: 1, name: 'Sphere', key: 'sphere', component: Sphere },
        { id: 2, name: 'Cone', key: 'cone', component: Cone },
        { id: 3, name: 'Cube', key: 'cube', component: Cube },
        { id: 4, name: 'Cylinder', key: 'cylinder', component: Cylinder },
        { id: 5, name: 'Rectangular Tank', key: 'rectangular-tank', component: RectangularTank },
        { id: 6, name: 'Capsule', key: 'capsule', component: Capsule },
        { id: 7, name: 'Spherical Cap', key: 'spherical-cap', component: SphericalCap },
        { id: 8, name: 'Conical Frustum', key: 'conical-frustum', component: ConicalFrustum },
        { id: 9, name: 'Ellipsoid', key: 'ellipsoid', component: Ellipsoid },
        { id: 10, name: 'Square Pyramid', key: 'square-pyramid', component: SquarePyramid },
        { id: 11, name: 'Tube Pyramid', key: 'tube-pyramid', component: Tube },
    ];
    units = [
        { id: 1, name: 'miles' },
        { id: 2, name: 'yards' },
        { id: 3, name: 'feet' },
        { id: 4, name: 'inches' },
        { id: 5, name: 'kilometers' },
        { id: 6, name: 'meters' },
        { id: 7, name: 'centimeters' },
        { id: 8, name: 'millimeters' },
        { id: 9, name: 'micrometers' },
        { id: 10, name: 'nanometers' },
        { id: 11, name: 'angstroms' },
    ];

    constructor(props) {
        super(props);
        this.state = {
            calculatorType: 'sphere',
        }
    }

    conversionSwitch = (conversion, value) => ({
        /* Millimeters */
        "millimeters to angstroms": (value) * 1e+7,
        "millimeters to nanometers": (value) * 1e+6,
        "millimeters to micrometers": (value) * 1000,
        "millimeters to millimeters": value,
        "millimeters to centimeters": (value) * 0.1,
        "millimeters to feet": (value) * 0.003281,
        "millimeters to inches": (value) * 0.03937,
        "millimeters to meters": (value) * 0.001,
        "millimeters to kilometers": (value) * 0.000001,
        "millimeters to yards": (value) * 0.001094,
        "millimeters to miles": (value) * 0.000000621,
        /* Centimeters */
        "centimeters to angstroms": (value) * 1e+8,
        "centimeters to nanometers": (value) * 1e+7,
        "centimeters to micrometers": (value) * 10000,
        "centimeters to millimeters": (value) * 10,
        "centimeters to centimeters": value,
        "centimeters to feet": (value) * 0.032808399,
        "centimeters to inches": (value) * 0.39370079,
        "centimeters to meters": (value) * 0.01,
        "centimeters to kilometers": (value) * 0.00001,
        "centimeters to yards": (value) * 0.010936,
        "centimeters to miles": (value) * 0.000006,
        /* Meters */
        "meters to angstroms": (value) * 1e+10,
        "meters to nanometers": (value) * 1e+9,
        "meters to micrometers": (value) * 1e+6,
        "meters to millimeters": (value) * 1000,
        "meters to centimeters": (value) * 100,
        "meters to feet": (value) * 3.2808399,
        "meters to inches": (value) * 39.37008,
        "meters to meters": value,
        "meters to kilometers": (value) * 0.001,
        "meters to yards": (value) * 1.093613,
        "meters to miles": (value) * 0.00062137119,
        /* Kilometers */
        "kilometers to angstroms": (value) * 1e+13,
        "kilometers to nanometers": (value) * 1e+12,
        "kilometers to micrometers": (value) * 1e+9,
        "kilometers to millimeters": (value) * 1e+6,
        "kilometers to centimeters": (value) * 100000,
        "kilometers to feet": (value) * 3280.84,
        "kilometers to inches": (value) * 39370.08,
        "kilometers to meters": (value) * 1000,
        "kilometers to kilometers": value,
        "kilometers to yards": (value) * 1093.613,
        "kilometers to miles": (value) * 0.62137119,
        /* Inches */
        "inches to angstroms": (value) * 2.54e+8,
        "inches to nanometers": (value) * 2.54e+7,
        "inches to micrometers": (value) * 25400,
        "inches to millimeters": (value) * 25.4,
        "inches to centimeters": (value) * 2.54,
        "inches to feet": (value) * 0.083333,
        "inches to inches": value,
        "inches to meters": (value) * 0.0254,
        "inches to kilometers": (value) * 0.000025,
        "inches to yards": (value) * 0.027778,
        "inches to miles": (value) * 0.000016,
        /* Feet */
        "feet to angstroms": (value) * 3.048e+9,
        "feet to nanometers": (value) * 3.048e+8,
        "feet to micrometers": (value) * 304800,
        "feet to millimeters": (value) * 304.8,
        "feet to centimeters": (value) * 30.48,
        "feet to feet": value,
        "feet to inches": (value) * 12,
        "feet to meters": (value) * 0.3048,
        "feet to kilometers": (value) * 0.000305,
        "feet to yards": (value) * 0.333333,
        "feet to miles": (value) * 0.000189393,
        /* Miles */
        "miles to angstroms": (value) * 1.609e+13,
        "miles to nanometers": (value) * 1.609e+12,
        "miles to micrometers": (value) * 1.609e+9,
        "miles to millimeters": (value) * 1609344,
        "miles to centimeters": (value) * 160934.4,
        "miles to feet": (value) * 5280,
        "miles to inches": (value) * 63360,
        "miles to meters": (value) * 1609.344,
        "miles to kilometers": (value) * 1.609344,
        "miles to yards": (value) * 1760,
        "miles to miles": value,
        /* Yards */
        "yards to angstroms": (value) * 9.144e+9,
        "yards to nanometers": (value) * 9.144e+8,
        "yards to micrometers": (value) * 914400,
        "yards to millimeters": (value) * 914.4,
        "yards to centimeters": (value) * 91.44,
        "yards to feet": (value) * 3,
        "yards to inches": (value) * 36,
        "yards to meters": (value) * 0.9144,
        "yards to kilometers": (value) * 0.000914,
        "yards to yards": value,
        "yards to miles": (value) * 0.000568,
        /* angstroms */
        "angstroms to angstroms": value,
        "angstroms to nanometers": (value) * 0.1,
        "angstroms to micrometers": (value) * 1e-4,
        "angstroms to millimeters": (value) * 1e-7,
        "angstroms to centimeters": (value) * 1e-8,
        "angstroms to feet": (value) * 3.2808e-10,
        "angstroms to inches": (value) * 3.937e-9,
        "angstroms to meters": (value) * 1e-10,
        "angstroms to kilometers": (value) * 1e-13,
        "angstroms to yards": (value) * 1.0936e-10,
        "angstroms to miles": (value) * 6.2137e-14,
        /* nanometers */
        "nanometers to angstroms": (value) * 10,
        "nanometers to nanometers": value,
        "nanometers to micrometers": (value) * 0.001,
        "nanometers to millimeters": (value) * 1e-6,
        "nanometers to centimeters": (value) * 1e-7,
        "nanometers to feet": (value) * 3.2808e-9,
        "nanometers to inches": (value) * 3.937e-8,
        "nanometers to meters": (value) * 1e-9,
        "nanometers to kilometers": (value) * 1e-12,
        "nanometers to yards": (value) * 1.0936e-9,
        "nanometers to miles": (value) * 6.2137e-13,
        /* micrometers */
        "micrometers to angstroms": (value) * 10000,
        "micrometers to nanometers": (value) * 1000,
        "micrometers to micrometers": value,
        "micrometers to millimeters": (value) * 0.001,
        "micrometers to centimeters": (value) * 1e-4,
        "micrometers to feet": (value) * 3.2808e-6,
        "micrometers to inches": (value) * 3.937e-5,
        "micrometers to meters": (value) * 1e-6,
        "micrometers to kilometers": (value) * 1e-9,
        "micrometers to yards": (value) * 1.0936e-6,
        "micrometers to miles": (value) * 6.2137e-10,
    })[conversion];

    getListItem() {
        return this.calculators.map((l, i) => {
            return <ListGroup.Item key={i} action as="button" eventKey={l.key} > {l.name} </ListGroup.Item>;
        })
    }

    changeCalculatorType = e => {
        console.log(e.target.value)
        this.setState({ calculatorType: e.target.value });
    }

    getOptionItem() {
        return this.calculators.map((l, i) => {
            return <option key={i} value={l.key}> {l.name} </option>;
        })
    }

    getSelectedComponent() {
        var found = this.calculators.find((c) => {
            return c.key === this.state.calculatorType;
        });
        return <found.component units={this.units} pi={this.pi} conversionSwitch={this.conversionSwitch} />;
    }

    getTabPane() {
        return this.calculators.map((t, i) => {
            return <Tab.Pane key={i} eventKey={t.key}> <t.component units={this.units} pi={this.pi} conversionSwitch={this.conversionSwitch} /> </Tab.Pane>;
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        return true;
    }

    render() {
        return (
            <Container style={{ marginTop: 95 }}>
                <h5 align="center" className="d-none d-sm-block d-md-block d-lg-block d-xl-block" style={{ paddingLeft: 285 }}>Volume Calculator</h5>
                <h5 align="center" className="d-xm-block d-sm-none d-md-none d-lg-none d-xl-none">Volume Calculator</h5>
                <Tab.Container defaultActiveKey={this.state.calculatorType}>
                    <Row>
                        <Col sm={3} className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            <ListGroup> {this.getListItem()} </ListGroup>
                        </Col>
                        <Col sm={9} className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            <Tab.Content style={{ padding: 5 }}>
                                {this.getTabPane()}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <Row>
                    <Col sm={3} className="d-xm-block d-sm-none d-md-none d-lg-none d-xl-none">
                        <Form.Control as="select" value={this.state.calculatorType} onChange={this.changeCalculatorType}>
                            {this.getOptionItem()}
                        </Form.Control>
                    </Col>
                    <Col sm={3} className="d-xm-block d-sm-none d-md-none d-lg-none d-xl-none">
                        {this.getSelectedComponent()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Volumes;