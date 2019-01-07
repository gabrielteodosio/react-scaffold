const reduxPage = require('./page/redux_page_template');
const simplePage = require('./page/simple_page_template');

const statefulComponent = require('./component/stateful_component_template');
const statelessComponent = require('./component/stateless_component_template');

const reducerGenerator = require('./redux/reducer_template');
const actionTypesGenerator = require('./redux/action_types_template');
const actionDispatchersGenerator = require('./redux/action_dispatchers_template');
const actionCreatorsGenerator = require('./redux/action_creators_template');

const template_generator = (name) => {
  return {
    redux_page_template: reduxPage(name),
    simple_page_template: simplePage(name),
    stateful_component_template: statefulComponent(name),
    stateless_component_template: statelessComponent(name),
    redux: {
      reducer: reducerGenerator(name),
      action_types_template: actionTypesGenerator(name),
      action_creators_template: actionCreatorsGenerator(name),
      action_dispatchers_template: actionDispatchersGenerator(name),
    },
  };
};

module.exports = template_generator;
