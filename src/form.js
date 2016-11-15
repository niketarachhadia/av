import React, { Component } from 'react';
import { Row, Card,  Col } from 'react-materialize';
import {connect} from 'react-redux';
import {standardizeAddress} from './actions';
import {push} from 'react-router-redux';

class Form extends Component {
  constructor(props) {
    super(props);
	this.state = {address: {
			Address1:'',
			Address2:'',
			City:'',
			State:'',
			Zip5:''
		}
	};
  }
  
  handleChange(event) {
	
	let updatedAddress=this.state.address;
	updatedAddress[event.target.id]= event.target.value;
    this.setState({address:updatedAddress});
  }
  standardize(event) {
	  event.preventDefault();
    const promise=this.props.dispatch(
            standardizeAddress(this.state.address)
        );
	
	promise.then(function(data){
		if(data.type==="STANDARDIZE_SUCCESS"){
			this.props.dispatch(push('/address'))
		}else{
			this.props.dispatch(push('/error'))
		}
		
	}.bind(this));
  }
  render() {
    return (
	<div>
      <Row>
		<Col className="offset-l3 offset-m3" l={6} m={6} s={12}>
			<Card className='light-blue darken-1' textClassName='white-text' title='Enter Address to Standardize & Verify' key="1">
				
				<input type="text"
				  placeholder="Address Line 1"
				  id="Address1"
				  className="validate" required="" aria-required="true"
				  value={this.state.address.Address1}
				  onChange={this.handleChange.bind(this)} 
				  />
				<input type="text"
				  placeholder="Address Line 2"
				  id="Address2"
				  value={this.state.address.Address2}
				  onChange={this.handleChange.bind(this)} 
				  />
				<input type="text"
				  placeholder="City"
				  id="City" 
				  className="validate" 
				  required="" 
				  aria-required="true"
				  onChange={this.handleChange.bind(this)} 
				  value={this.state.address.City}/>
				<input type="text"
				  placeholder="State"
				  id="State" 
				  className="validate" 
				  required="" 
				  aria-required="true"
				  onChange={this.handleChange.bind(this)} 
				  value={this.state.address.State}/>
				<input type="text"
				  placeholder="Postal Code"
				  id="Zip5"
				  className="validate" 
				  required="" 
				  aria-required="true"
				  onChange={this.handleChange.bind(this)} 
				  value={this.state.address.Zip5}/>
			</Card>
			
		</Col>
		
	</Row>
	<Row>
		<a href="#" className="waves-effect waves-light btn-large light-blue darken-1" onClick={this.standardize.bind(this)}>
                   <i className="material-icons left">location_on</i> Standardize
        </a>
		
	</Row>
	</div>
    );
  }
}
var Container = connect()(Form);
export default Container;