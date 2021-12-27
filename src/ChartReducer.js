const initialState = {
  chartList : [],
  loading : true,
  error: false,
};

function chartReducer(state = initialState, action) {
   
  switch (action.type) {
      case 'LOAD_CHART':
          return { ...state, chartList:[], error: false, loading: true }
      case 'GET_CHART':
        return { ...state, chartList: action.payload, error: false, loading: false }
      case 'ERROR_CHART':
        return { ...state, chartList: [], error: true, loading: false }
        default:          
      return state;
  }
};
export default chartReducer;