const name_generator = require('../../utils/name_generator');

const stateful_component_template = (name) => {
  const componentName = name_generator(name);
  const template = `import React, { Component } from \'react\';

class ${componentName} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => {
    return (
      <div>Auto generated stateless component.</div>
    );
  };
}

export default ${componentName};
`;

  return template;
};

module.exports = stateful_component_template;
