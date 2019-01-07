const action_dispatchers_template_generator = (name) => {
  const action_dispatchers = `/*
import axios from 'axios';

export function dispatchFetchData() {
  return async (dispatch) => {
    dispatch(actionCreators.fetchData());

    const url = '';
    const success_message = 'Fetch successful!'
    const error_message = 'Failed to fetch.';

    await axios.get(url)
      .then(({ status, data }) => {
        if (status === 200) {
          dispatch(actionCreators.fetchDataSuccess(data, success_message));
        } else {
          const err = new Error(error_message);
          dispatch(actionCreators.fetchDataError(err, error_message));
        }
      })
      .catch((error) => {
        dispatch(actionCreators.fetchDataError(error, error_message));
      });
  }
}
*/`;
  return action_dispatchers;
};

module.exports = action_dispatchers_template_generator;
