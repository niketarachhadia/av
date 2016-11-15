import React, { Component } from 'react';
import {Row} from 'react-materialize';
import Map from './map';
import Address from './address';

class Results extends Component {
  render() {
    return (
      <div id="results">
			<Row>
				<Map/>
				<Address/>
			</Row>	
		</div>
    );
  }
}

export default Results;