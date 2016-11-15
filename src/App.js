import React, { Component } from 'react';
import './App.css';
import Form from './form';

const divStyle = {
  backgroundImage: 'url(./bk.jpg)',
};

class App extends Component {
  render() {
    return (
      <div className="App" style={divStyle} id="top">
        <div>          
          <img className="responsive-img"  src={'./standards.png'} alt="Logo" />
        </div>
        <Form/>
		{this.props.children}
      </div>
    );
  }
}

export default App;
