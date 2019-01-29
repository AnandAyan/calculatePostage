import React from 'react'
import PropTypes from 'prop-types'
import TypeOfService from './typeOfService';
import SendFrom from './sendFrom';

const Calculator = ({ postRate, calculatPost , serviceType}) => {
    const calculate = () => {
        calculatPost( postRate.totalAmount + 1)
    }
    const type_servicews = (type) => {
         
        serviceType(type)
    }
    console.log(postRate)
    return (
        
        <div className="row">
            <div className="col-md-12"> <TypeOfService onchangeServices={type_servicews}></TypeOfService></div>
            <div className="col-md-6">  <SendFrom services_type={postRate.services_type} /></div>
            <div className="col-md-6">  <SendFrom services_type={postRate.services_type} /></div>

            <div className="col-md-6">   Here is the rate {postRate.totalAmount}</div>

            <div className="col-md-12">  <button onClick={calculate} >calculate</button></div>
        </div>
    )
}

Calculator.propTypes = {
    postRate: PropTypes.objectOf(
        PropTypes.shape({
            postageAmount: PropTypes.number,
            gst: PropTypes.number,
            totalAmount: PropTypes.number,
            services_type: PropTypes.string
        })
    ).isRequired,
    calculatPost: PropTypes.func.isRequired
}

export default Calculator