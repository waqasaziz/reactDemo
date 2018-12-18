import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import AmpList from './amp_list/AmpList';
import AmpView from './amp_view/AmpView';

class App extends Component {
  render() {
    return (
      <Row>
        <Col md={3}><AmpList onClick={(refernece)=> {console.log(`I am clicked: ${refernece}`)}}/></Col>
        <Col md={9}><AmpView/></Col>
      </Row>
    );
  }
}

export default App;
