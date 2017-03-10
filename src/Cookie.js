import React, { Component } from 'react';
import './Cookie.css';

class Cookie extends Component {
   constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  handleClick = value => event => {
    this.setState({count: this.state.count+value});
  }
  render(){
    return(
        <div className="cookie">
          <h4>{this.props.to}</h4>
          <div>{this.state.count}</div>
          <button className="cookie-button" onClick={this.handleClick(1)}>+</button>
          <button className="cookie-button" onClick={this.handleClick(-1)}>-</button>
          {this.props.image}
        </div>
      );
  }
}
export default Cookie;
