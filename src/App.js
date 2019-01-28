import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './component/calculate_main';
import { connect } from 'react-redux';
import {calculatPost} from './action'
const calculateRate = (state) => {
  console.log(state);
  return state;
}
class App extends Component {
 
  render() {
    return ( <div></div>);
  }
}
const mapStateToProps = state => ({
  postRate: calculateRate(state) // state to update
})

const mapDispatchToProps = dispatch => ({
  calculatPost: id => dispatch(calculatPost(id)) // action to dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
// export default App;s
