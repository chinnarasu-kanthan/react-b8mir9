const ActionCreators = {
  setChartData(dispatch,data) {
    dispatch({
      type: 'SET_CHART',
      payload: data,
    });
  },
};
export default ActionCreators;
