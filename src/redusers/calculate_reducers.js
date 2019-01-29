

const initialState = {
    postageAmount: 0,
    gst: 0,
    totalAmount:  0 ,
    services_type: 'dom'    
  }
  export default function calculateReducers(state=initialState, action) {
    switch(action.type) {
      case 'CALCULATEPOST':
     
        return {
          ...state,
          totalAmount:action.payload
      };
      
      case 'SERVICE_TYPE':
        return {
          ...state,
          services_type: action.payload,
 
        };
     
      default:
        return state;
    }
  }