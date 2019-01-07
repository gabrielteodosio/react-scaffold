const name_generator = require('../../utils/name_generator');

const reducer_template_generator = (name) => {
  const reducerName = name_generator(name);
  const reducer = `// import here the action types to manipulate the reducer state as you will

const initialState = {
  isLoading: false,
  error: null,
  message: null,
  data: null,
};

const ${reducerName}Reducer = (state = initialState, action) => {
  switch (action.type) {
    /*
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };

    case actionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      }
    */
    default:
      return state;
  }
};

export default ${reducerName}Reducer;
`;

  return reducer;
};

module.exports = reducer_template_generator;
