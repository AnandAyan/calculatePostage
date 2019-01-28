import React from 'react'
import PropTypes from 'prop-types'

const SendForm = ({ onchangePinCode, locationDetails }) => {
    const changePin = (e) => {
        onchangePinCode(e.target.value)
    }
    return  (
    
        <div> 
            <p><label>Pincode</label> <input placeholder="#1234"/> </p>
            <p><label>City / District</label> <input placeholder="#1234"/> </p>
            <p><label>State</label> <input placeholder="#1234"/> </p>
        </div>
      )
}

SendForm.propTypes = {    
    locationDetails: PropTypes.objectOf(
        PropTypes.shape({
          pincode: PropTypes.number,
          city:  PropTypes.string,
          state:  PropTypes.string      
        })
      ),
      onchangePinCode: PropTypes.func
}

export default SendForm