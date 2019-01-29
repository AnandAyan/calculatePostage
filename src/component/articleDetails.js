import React from 'react'
import PropTypes from 'prop-types'

const ArticleDetails = ({ itemDesc, sendItemDesc }) => {
     
    return  (
    
        <div> 
                 <p><label>Weight (in gms)</label> <input placeholder="#Weight"/> </p>
                <p><label>Length (in cm)</label> <input placeholder="#Length"/> </p>
                <p><label>Width (in cm)</label> <input placeholder="#Width"/> </p>
                <p><label>Height (in cm)</label> <input placeholder="#Height"/> </p>
            
        </div>
      )
}

SendForm.propTypes = {    
    sendItemDesc: PropTypes.func,
    itemDesc: PropTypes.string
}

export default ArticleDetails