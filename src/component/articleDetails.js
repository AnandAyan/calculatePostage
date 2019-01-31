import React from 'react'
import PropTypes from 'prop-types'

const ArticleDetails = ({ itemDesc, sendItemDesc }) => {
    const onCh = e => {
       sendItemDesc({key:e.target.dataset.t,val: parseInt(e.target.value)})
    }
    return  (
        
        <div className="form-group"> 
          
           <div className="row">
           <div className="col-md-3">  
                <select className="form-control ">
                    <option value="le"> Leter/Document</option>
                    <option value="pa"> Parcel</option>
                    <option value="in"> Inland letter</option>
                    <option value="buk"> Book Packet</option>
                    <option value="ru"> Indian postal order</option>
                </select>
                </div>
           </div>
            <div className="item-descrip row">
            <p className="col-md-3"><label>Weight (in gms)</label> <input data-t="we" onChange = {onCh} className="form-control" placeholder="#Weight"/> </p>
                <p className="col-md-3"><label>Length (in cm)</label> <input data-t="l" onChange = {onCh} className="form-control" placeholder="#Length"/> </p>
                <p className="col-md-3"><label>Width (in cm)</label> <input data-t="w" onChange = {onCh} className="form-control" placeholder="#Width"/> </p>
                <p className="col-md-3"><label>Height (in cm)</label> <input data-t="h" onChange = {onCh} className="form-control" placeholder="#Height"/> </p>
            </div>
        </div>
      )
}

ArticleDetails.propTypes = {    
    sendItemDesc: PropTypes.func,
    itemDesc: PropTypes.string
}

export default ArticleDetails