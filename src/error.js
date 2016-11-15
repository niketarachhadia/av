import React, { Component } from 'react';
import { Row, Card,  Col } from 'react-materialize';
import {connect} from 'react-redux';

class Error extends Component {
  
  render() {
    return (
		  <Row>
			  <Col className="offset-l3 offset-m3" l={6} m={6} s={12}>
				<Card className='light-blue darken-1' textClassName='red' key="1" title='Error'>
					<p>{this.props.error}</p>
				</Card>
				<a className="waves-effect waves-light btn-large light-blue darken-1" href="#"><i className="material-icons left">repeat</i>New Address</a>
			  </Col>
			</Row>
		
    );
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {error:state.addressReducer.error}
}

const Container = connect(mapStateToProps)(Error);
export default Container;