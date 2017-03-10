import React, { Component } from 'react';
import cookie from './cookie.svg';
import './App.css';
import Cookie from './Cookie';


const people = [
['Borson', <img className="image" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/12313662_968199276579860_2837459645404778621_n.jpg?oh=bda494f288a95b0778b256122b9a39ff&oe=596ADA29" />], 
['Krzosztof', <img className="image" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/10472688_659612144087337_671694521951190651_n.jpg?oh=e28857d115686b5dc95eef9ca797e2df&oe=592BA206" />], 
['Łuksz', <img className="image" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/1891045_1509012152658403_1077485941_n.jpg?oh=29d906919f4c99f369088fc4da66234e&oe=596CBFD6" />], 
['Julek', <img className="image" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t31.0-8/13116227_1385126311514348_5002976662098322969_o.jpg?oh=eb27bffce97af80322bf1ee4cae0f8b5&oe=596371D9"/>], 
['Mireł', <img className="image" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/10440899_767575453294604_8771247406832010880_n.jpg?oh=109dfd368624ff1deb5d65d163f3ca53&oe=59330C05" />], 
['Dżejkob-chan', <img className="image" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/16640814_1555139527846825_4905702115535711422_n.jpg?oh=a85772b0ae9939bc3bcd7feb29c89656&oe=595F7943"/>]
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cookie} className="App-logo" alt="cookie" />
          <h2>Spicy cookies</h2>
        </div>
        <p className="cookies-box">
          {people.map(person => <Cookie to={person[0]} image={person[1]}/>)
          }
        </p>
      </div>
    );
  }
}

export default App;
