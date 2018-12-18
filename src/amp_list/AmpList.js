import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import './AmpList.css';
import { prototype } from 'events';


class AmpList extends Component {
  render() {
    const types = [ "Minor", "Major", "Critical", "Blocker"];
    const startIndex = 106582;
    const rows = [];

    for (let index = 0; index < 100; index++) {
      rows.push({
        type: types[Math.floor(Math.random() * types.length)].toLowerCase(),
        Reference: startIndex  + index,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      });
    }

    return (
      
      <Row>
        <Col md={12}>
          <table className="amp-list">
          <tbody>
            {
              rows.map((row, i)=> 
                <tr key={row.Reference} onClick={()=> this.props.onClick(row.Reference)}>
                  <td md={1} className={`${row.type} type`}></td>
                  <td md={2} className="reference">{row.Reference}</td>
                  <td md={9} className="description"><p className="multiline-ellipsis">{row.title}</p></td>
                </tr>
              )
            }
          </tbody>
          </table>
        </Col>
      </Row>
      
    );
  }
}

AmpList.pwropTypes = {
  onClick: PropTypes.func.isRequired
};

export default AmpList;
