import React from 'react'
import PropTypes from 'prop-types'
import TypeOfService from './typeOfService';
import SendFrom from './sendFrom';

const Calculator = ({ postRate,calculatPost }) => {
    const calculate = () => {
        calculatPost({  postageAmount: 1, gst: 1, totalAmount:postRate.calculate.totalAmount+1    })
    }
    const type_servicews = (type) =>{
        console.log(type);
    }
    return  (
    
        <div className="row"> 
            <div className="col-md-12"> <TypeOfService onchangeServices={type_servicews}></TypeOfService></div>
            <div className="col-md-6">  <SendFrom/></div>
            <div className="col-md-6">  <SendFrom/></div>
          
            <div className="col-md-6">   Here is the rate {postRate.calculate.totalAmount}</div>

            <div className="col-md-12">  <button onClick={calculate} >calculate</button></div>
        </div>
      )
}

Calculator.propTypes = {
    postRate: PropTypes.objectOf(
    PropTypes.shape({
      postageAmount: PropTypes.number.isRequired,
      gst:  PropTypes.number.isRequired,
      totalAmount:  PropTypes.number.isRequired      
    }).isRequired
  ).isRequired,
  calculatPost: PropTypes.func.isRequired
}

export default Calculator