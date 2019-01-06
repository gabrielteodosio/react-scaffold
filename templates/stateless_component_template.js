const stateless_component_template = (name) => {
  const template = `import React, { Component } from \'react\';

const ${name} = (props) => {
  return (
    <div>Auto generated stateless component.</div>
  );
}

export default ${name};
`;

  return template;
};

module.exports = stateless_component_template;
