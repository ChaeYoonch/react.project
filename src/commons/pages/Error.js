import React, { Component } from 'react';
import loadable from '@loadable/component';

const ErrorDisplay = loadable(() => import('../components/ErrorDisplay'));

class ErrorPage extends Component {
  state = {
    message: '',
  };

  componentDidCatch(error, info) {
    if (error) {
      this.state({ message: error.message });
      console.error(error, info);
    }
  }

  render() {
    const { children } = this.props;
    const { message } = this.state;

    return message ? <ErrorDisplay>{message}</ErrorDisplay> : children; // error 가 있으면 message로 나오고, error가 없으면 chidren이 나옴
  }
}

export default React.memo(ErrorPage);
