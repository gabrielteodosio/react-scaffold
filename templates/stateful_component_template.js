const stateful_component_template = (name) => {
  const template = `import React, { Component } from \'react\';

class ${name} extends {
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

export default ${name};
`;

  return template;
};

module.exports = stateful_component_template;
