import React, { Component } from 'react';
import { Card, Col} from 'react-materialize';
import {connect} from 'react-redux';

class Address extends Component {
  
  render() {
    return (
      <Col l={6} m={6} s={12}>
		<Card className='light-blue darken-1' textClassName='blue-text' title='Standardized Address' key="1">
			<ul className="collection">
			  <li className="collection-item">Address Line 1: {this.props.address.Address1} </li>
			  <li className="collection-item">Address Line 2: {this.props.address.Address2}</li>
			  <li className="collection-item">City: {this.props.address.City}</li>
			  <li className="collection-item">State: {this.props.address.State}</li>
			  <li className="collection-item">Postal Code: {this.props.address.Zip5}</li>
			</ul>
		</Card>
		<a className="waves-effect waves-light btn-large light-blue darken-1" href="#"><i className="material-icons left">repeat</i>New Address</a>
	  </Col>
    );
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {address:state.addressReducer}
}

const Container = connect(mapStateToProps)(Address);
export default Container;