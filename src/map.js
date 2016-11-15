import React, { Component } from 'react';
import { Card,  Col } from 'react-materialize';
import {connect} from 'react-redux';

class Map extends Component {
  
  render() {
	let mapAddr='';
	if(this.props.address.Address1){
		mapAddr=this.props.address.Address1.replace(/\s+/g, '+');
		mapAddr=mapAddr+'+'+this.props.address.City.replace(/\s+/g, '+');
		mapAddr=mapAddr+'+'+this.props.address.State.replace(/\s+/g, '+');
		mapAddr=mapAddr+'+'+this.props.address.Zip5.replace(/\s+/g, '+');
	}    
	const srcUrl="https://www.google.com/maps/embed/v1/place?key=AIzaSyD14eiTLEPwYtSFswDjNvOPQbOcoz6Vc1w&q="+mapAddr;
    return (
		<Col l={6} m={6} s={12}>
			<Card className='light-blue darken-1' textClassName='white-text' title='Map' key="4">
				<div className="mapContainer">
					<iframe
					  src={srcUrl}>
					</iframe>
				</div>
			</Card>
		</Col>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {address:state.addressReducer}
}
const Container = connect(mapStateToProps)(Map);
export default Container;