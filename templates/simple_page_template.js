const simple_page_template = (name) => {
  const template = `import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ${name} extends Component {
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

export default withRouter(${name});
`;

  return template;
};

module.exports = simple_page_template;
