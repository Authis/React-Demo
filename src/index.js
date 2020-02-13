import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

state = {
   count : 1,
}

increment = () => {
  let currval = this.state.count;
    this.setState({
      count :currval + 1,
    });

}
decerement = () => {
  let currval = this.state.count;
  this.setState({
    count :currval - 1,
  });

}

  render() {
    return (
     <div>
      <h1>{this.state.count}</h1>
      <div><button onClick={this.increment}>+</button></div>
       <div><button onClick={this.decerement}>-</button></div>
     </div>);
  }
}

render(<App />, document.getElementById('root'));