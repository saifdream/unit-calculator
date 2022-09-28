import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

export class NotFound extends Component {
  componentDidMount() { }
  render() {
    return (
      <Container fluid={true} style={{ marginTop: 120, textAlign: 'center' }}>
        <h1>Not found</h1>
      </Container>
    )
  }
}

export default NotFound;