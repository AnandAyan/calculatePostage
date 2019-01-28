

const initialState = {
    postageAmount: 0,
    gst: 0,
    totalAmount:  0     
  }
  export default function calculateReducers(state=initialState, action) {
    switch(action.type) {
      case 'CALCULATEPOST':
      
        return {
          ...action.payload,
          isLoading: true
      };
      
      case 'FETCH_SEARCH_SUCCESS':
        return {
          ...state,
          payload: action.payload,
          isLoading: false
        };
     
      default:
        return state;
    }
  }