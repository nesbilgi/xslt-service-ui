import React, { Component } from 'react';

class IFrame extends Component {
  ref = React.createRef();

  render = () => {
    return (
      <iframe
        title={this.props.title}
        frameBorder={0}
        style={{ minHeight: 800}}
        width="100%"
        height="100%"
        ref={this.ref}
        scrolling="yes"
        seamless
        srcDoc={this.props.content}
      />
    );
  };
}

export default IFrame;
