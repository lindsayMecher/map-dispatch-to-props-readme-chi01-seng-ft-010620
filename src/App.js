import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// import an action here
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    console.log(this.props)
    console.log(addItem())
    // when the click event fires, run this function addItem
    // the function is available through the props because of the connect
    // method.
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// connect the actions you want as an object as the second argument to the connect method.
export default connect(mapStateToProps, { addItem: addItem })(App);
