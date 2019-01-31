

const initialState = {
    postageAmount: 0,
    gst: 0,
    totalAmount:  0 ,
    services_type: 'dom',
    articleDetail:{
      w:0,h:0,we:0,l:0
    }    
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
      case 'ARTICLE_DETAIL':{
        return {
          ...state,
          articleDetail:{
            ...state.articleDetail,
            [action.payload.key]: action.payload.val
          }
 
        };
      };
      default:
        return state;
    }
  }