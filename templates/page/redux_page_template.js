const name_generator = require('../../utils/name_generator');

const redux_page_template = (name) => {
  const className = name_generator(name);
  const template = `import React, { Component } from \'react\';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

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

const RouterWrapped = withRouter(${className});

const bindActions = (dispatch) => {
  return {
    // actions: bindActionCreators({ ...actionDispatchers }, dispatch),
  };
};

const mapStatesToProps = (state) => ({
});

export default connect(
  mapStatesToProps,
  bindActions,
)(RouterWrapped);
`;

  return template;
};

module.exports = redux_page_template;
