const name_generator = require('../../utils/name_generator');

const action_types_template_generator = (name) => {
  const templateName = name_generator(name);

  const actionTypes = `/*
export const FETCH_DATA = '${templateName}/FETCH_DATA';
export const FETCH_DATA_SUCCESS = '${templateName}/FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = '${templateName}/FETCH_DATA_ERROR';
*/`;

  return actionTypes;
};

module.exports = action_types_template_generator;
