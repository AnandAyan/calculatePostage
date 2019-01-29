import React from 'react'
import PropTypes from 'prop-types'

const SendForm = ({ services_type, onchangePinCode, locationDetails }) => {
    const changePin = (e) => {
        onchangePinCode(e.target.value)
    }
    return  (
    
        <div>
            <p> servicew type {services_type}</p>
           { services_type === 'dom' && <div className="dom">
                <p><label>Pincode</label> <input placeholder="#1234"/> </p>
                <p><label>City / District</label> <input placeholder="#1234"/> </p>
                <p><label>State</label> <input placeholder="#1234"/> </p>
            </div>}
            {services_type === 'int' && <div className="int">
                <p><label>Country</label>  
                <select>
                    <option value="au"> Austrilia</option>
                    <option value="uk"> United Kingdom</option>
                    <option value="us"> United states</option>
                    <option value="ru"> Russia</option>
                </select>
                </p>

            </div>}
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
      services_type:PropTypes.string,
      onchangePinCode: PropTypes.func
}

export default SendForm