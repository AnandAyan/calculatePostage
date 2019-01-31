import React from 'react'
import PropTypes from 'prop-types'
import TypeOfService from './typeOfService';
import SendFrom from './sendFrom';
import ArticleDetails from './articleDetails';
import '../main.css';
const Calculator = ({ postRate, calculatPost, serviceType, articleDetailSum }) => {
    const calculate = () => {
        
    const total = (postRate.articleDetail.w*postRate.articleDetail.h)+(postRate.articleDetail.we*postRate.articleDetail.l);
    calculatPost(total)
    }
    const type_servicews = (type) => {

        serviceType(type)
    }
    const captuerArticleDetails = (articleDetails) => {
        articleDetailSum(articleDetails)
    }     
    return (

        <div className="container pg-cal">

            <div className="row">
                <h5 className="col-md-12">Type of Service</h5>

                <div className="col-md-12">
                    <TypeOfService onchangeServices={type_servicews}></TypeOfService>
                </div>
            </div>
            
            { postRate.services_type !='mis' && <div className="row">

                <div className="col-md-3 ">
                <h5 className=" ">Send From</h5>
                    <SendFrom services_type={postRate.services_type} /></div>

                <div className="col-md-3 offset-md-2">
                <h5 className=" ">Send To</h5>
                    <SendFrom services_type={postRate.services_type} /></div>
            </div>
            }
            <div className="row">
               
                <div className="col-md-12"> 
                 <h5 className="">Article Details</h5>
                 <ArticleDetails services_type={postRate.services_type}  sendItemDesc={captuerArticleDetails} /></div>

            </div>
            <div className="row">
                <div className="col-md-6 alert alert-dark" role="alert">
               Total Cost of your postal is :  <b>{postRate.totalAmount}</b>
                </div> 
                <div className="col-md-6">  <button className="btn btn-primary" onClick={calculate} >calculate</button></div>
            </div>

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