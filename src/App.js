import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './component/calculate_main';
import { connect } from 'react-redux';
import {calculatPost,serviceType, articleDetailSum} from './action'
import ArticleDetails from './component/articleDetails';
const calculateRate = (state) => {
  return state;
}
class App extends Component {
 
  render() {
    return ( <div></div>);
  }
}
const mapStateToProps = state => ({
  postRate: calculateRate(state.calculate) // state to update
})

const mapDispatchToProps = dispatch => ({
  calculatPost: id => dispatch(calculatPost(id)),
  serviceType: service => dispatch(serviceType(service)) ,// action to dispatch
  articleDetailSum: ad => dispatch(articleDetailSum(ad))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
// export default App;s
