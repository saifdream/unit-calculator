import React, { Component } from 'react';
import { DropdownToggle, DropdownMenu, Navbar, Nav, NavItem, UncontrolledDropdown, DropdownItem } from 'reactstrap';
import { Container, Collapse, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import logo from './img/chitra-logo.png';

import NotFound from './components/not-found.component';

import Length from './components/unit/length.component';
import Area from './components/unit/area.component';
import Density from './components/unit/density.component';
import Volume from './components/unit/volume.component';
import Mass from './components/unit/mass.component';
import VolumetricLiquidFlow from './components/unit/volumetric-liquid-flow.component';
import VolumetricGasFlow from './components/unit/volumetric-gas-flow.component';
import MassFlow from './components/unit/mass-flow.component';
import HighPressure from './components/unit/high-pressure.component';
import LowPressure from './components/unit/low-pressure.component';
import Speed from './components/unit/speed.component';
import Torque from './components/unit/torque.component';
import DynamicViscosity from './components/unit/dynamic-viscosity.component';
import KinematicViscosity from './components/unit/kinematic-viscosity.component';
import Temperature from './components/unit/temperature.component';

import Volumes from './components/formula/volumes.component';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    library.add(faExchangeAlt);

    this.changeRoute = this.changeRoute.bind(this);

    this.state = {
      collapse: false,
      pathname: window.location.pathname || '/'
    };
  }

  componentDidMount() { }

  componentDidUpdate(prevProps) { }

  changeRoute(pathname) {
    this.setState((state, props) => ({
      pathname: pathname,
      collapse: !state.collapse ? false : true,
    }));
  }

  isActive = (pathname) => {
    return pathname === window.location.pathname;
  }

  render() {
    const unitRoutes = [
      { id: 1, name: 'Length', path: '/unit/length' },
      { id: 2, name: 'Area', path: '/unit/area' },
      { id: 3, name: 'Volume', path: '/unit/volume' },
      { id: 4, name: 'Mass (Weight)', path: '/unit/mass' },
      { id: 5, name: 'Density', path: '/unit/density' },
      { id: 6, name: 'Volumetric Liquid Flow', path: '/unit/volumetric-liquid-flow' },
      { id: 7, name: 'Volumetric Gas Flow', path: '/unit/volumetric-gas-flow' },
      { id: 8, name: 'Mass Flow', path: '/unit/mass-flow' },
      { id: 9, name: 'High Pressure', path: '/unit/high-pressure' },
      { id: 10, name: 'Low Pressure', path: '/unit/low-pressure' },
      { id: 11, name: 'Speed', path: '/unit/speed' },
      { id: 12, name: 'Torque', path: '/unit/torque' },
      { id: 13, name: 'Dynamic Viscosity', path: '/unit/dynamic-viscosity' },
      { id: 14, name: 'Kinematic Viscosity', path: '/unit/kinematic-viscosity' },
      { id: 15, name: 'Temperature', path: '/unit/temperature' },
    ];

    const formulaRoutes = [
      { id: 1, name: 'Volume', path: '/formula/volume' },
    ];

    const componentRoutes = [
      { id: 1, component: Length, path: '/unit/length' },
      { id: 2, component: Area, path: '/unit/area' },
      { id: 3, component: Volume, path: '/unit/volume' },
      { id: 4, component: Mass, path: '/unit/mass' },
      { id: 5, component: Density, path: '/unit/density' },
      { id: 6, component: VolumetricLiquidFlow, path: '/unit/volumetric-liquid-flow' },
      { id: 7, component: VolumetricGasFlow, path: '/unit/volumetric-gas-flow' },
      { id: 8, component: MassFlow, path: '/unit/mass-flow' },
      { id: 9, component: HighPressure, path: '/unit/high-pressure' },
      { id: 10, component: LowPressure, path: '/unit/low-pressure' },
      { id: 11, component: Speed, path: '/unit/speed' },
      { id: 12, component: Torque, path: '/unit/torque' },
      { id: 13, component: DynamicViscosity, path: '/unit/dynamic-viscosity' },
      { id: 14, component: KinematicViscosity, path: '/unit/kinematic-viscosity' },
      { id: 15, component: Temperature, path: '/unit/temperature' },

      { id: 16, component: Volumes, path: '/formula/volume' },
    ];

    const { collapse } = this.state;

    return (
      <Container fluid={true}>
        <Router>
          <Navbar className="navbar fixed-top navbar-expand-lg navbar-light bg-warning" color="warning" light expand="sm">
            <Link to={'/'} className="navbar-brand">
              <Image src={logo} className="App-logo" alt="logo" rounded />
            </Link>
            <button className="navbar-toggler" type="button" onClick={() => this.setState({ collapse: !collapse })} aria-controls="navbarSupportedContent" aria-expanded={collapse} data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Collapse in={this.state.collapse} className="collapse navbar-collapse" id="navbarSupportedContent" navbar>
              <Nav navbar>
                <NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      Units Conversion
                      </DropdownToggle>
                    <DropdownMenu right>
                      {
                        unitRoutes.map((r, i) => {
                          return <DropdownItem key={i.toString()} tag="button" className="warning" active={this.isActive(r.path)} onClick={() => { this.changeRoute(r.path); this.setState({ collapse: !collapse }); }}><Link key={i.toString()} to={r.path} className="dropdown-item">{r.name}</Link></DropdownItem>;
                        })
                      }
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      Formula Conversion
                      </DropdownToggle>
                    <DropdownMenu right>
                      {
                        formulaRoutes.map((r, i) => {
                          return <DropdownItem key={i.toString()} tag="button" className="warning" active={this.isActive(r.path)} onClick={() => { this.changeRoute(r.path); this.setState({ collapse: !collapse }); }}><Link key={i.toString()} to={r.path} className="dropdown-item">{r.name}</Link></DropdownItem>;
                        })
                      }
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path='/' component={Length} />
            {
              componentRoutes.map((r, i) => {
                return <Route key={i.toString()} path={r.path} component={r.component} />;
              })
            }
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
