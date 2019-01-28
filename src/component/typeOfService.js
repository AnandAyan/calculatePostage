import React from 'react'
import PropTypes from 'prop-types'

const TypeOfService = ({ onchangeServices }) => {
    const seervicesChange = (e) => {
        onchangeServices(e.target.value)
    }
    return  (
    
        <div> 
          <input id='dom' type='radio' name='servicewsType' value="dom" onChange = {seervicesChange}/> <label htmlFor="dom">Domestic</label> 
          <input id='int' type='radio' name='servicewsType' value="int" onChange = {seervicesChange}/> <label htmlFor="int">International</label> 
          <input id='mis' type='radio' name='servicewsType' value="mis" onChange = {seervicesChange}/> <label htmlFor="mis">Miscellaneous</label> 
        </div>
      )
}

TypeOfService.propTypes = {    
    onchangeServices: PropTypes.func
}

export default TypeOfService