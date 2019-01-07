const name_generator = require('../../utils/name_generator');

const stateless_component_template = (name) => {
  const componentName = name_generator(name);
  const template = `import React, { Component } from \'react\';

const ${componentName} = (props) => {
  return (
    <div>Auto generated stateless component.</div>
  );
}

export default ${componentName};
`;

  return template;
};

module.exports = stateless_component_template;
