const name_generator = require('../../utils/name_generator');

const simple_page_template = (name) => {
  const className = name_generator(name);
  const template = `import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ${className} extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount = () => {

  };

  render = () => {
    return (
      <div>Auto generated page without redux.</div>
    );
  };
}

export default withRouter(${className});
`;

  return template;
};

module.exports = simple_page_template;
