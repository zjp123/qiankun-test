import React from 'react';

export default class LayoutCom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2>
        这是layout页面主应用
        {this.props.children}
      </h2>
    );
  }
}
