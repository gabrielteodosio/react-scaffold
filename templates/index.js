const reduxPage = require('./redux_page_template');
const simplePage = require('./simple_page_template');
const statefulComponent = require('./stateful_component_template');
const statelessComponent = require('./stateless_component_template');

const template_generator = (name) => {
  return {
    redux_page_template: reduxPage(name),
    simple_page_template: simplePage(name),
    stateful_component_template: statefulComponent(name),
    stateless_component_template: statelessComponent(name),
  };
};

module.exports = template_generator;
