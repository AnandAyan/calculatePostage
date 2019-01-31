import React from 'react'
import PropTypes from 'prop-types'

const TypeOfService = ({ onchangeServices }) => {
    const seervicesChange = (e) => {
        onchangeServices(e.target.value)
    }
    return  (
    
        <div className="form-check"> 
          <input className="form-check-input" id='dom' defaultChecked type='radio' name='servicewsType' value="dom" onChange = {seervicesChange}/> <label htmlFor="dom">Domestic</label> 
          <input className="form-check-input" id='int' type='radio' name='servicewsType' value="int" onChange = {seervicesChange}/> <label htmlFor="int">International</label> 
          <input className="form-check-input" id='mis' type='radio' name='servicewsType' value="mis" onChange = {seervicesChange}/> <label htmlFor="mis">Miscellaneous</label> 
        </div>
      )
}

TypeOfService.propTypes = {    
    onchangeServices: PropTypes.func
}

export default TypeOfService