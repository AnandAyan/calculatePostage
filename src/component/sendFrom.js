import React from 'react'
import PropTypes from 'prop-types'

const SendForm = ({ services_type, onchangePinCode, locationDetails }) => {
    const changePin = (e) => {
        onchangePinCode(e.target.value)
    }
    return  (
    
        <div>
 
           { services_type === 'dom' && <div className="dom">
                <div className="form-group"><label>Pincode</label> <input className="form-control"  /> </div>
                <div><label>City / District</label> <input className="form-control" /> </div>
                <div><label>State</label> <input className="form-control"  /> </div>
            </div>}
            {services_type === 'int' && <div className="int">
                <div><label>Country</label>  
                <select className="form-control">
                    <option value="au"> Austrilia</option>
                    <option value="uk"> United Kingdom</option>
                    <option value="us"> United states</option>
                    <option value="ru"> Russia</option>
                </select>
                </div>

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