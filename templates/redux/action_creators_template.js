const action_creators_template_generate = (name) => {
  const actionCreators = `/*
  export function fetchData() {
    return {
      type: actionTypes.FETCH_DATA,
    };
  }

  export function fetchDataSuccess(data, message) {
    return {
      type: actionTypes.FETCH_DATA_SUCCESS,
      payload: {
        data,
        message,
      },
    };
  }

  export function fetchDataError(error, message) {
    return {
      type: actionTypes.FETCH_DATA_ERROR,
      payload: {
        error,
        message,
      },
    };
  }
  */
  `;

  return actionCreators;
};

module.exports = action_creators_template_generate;
