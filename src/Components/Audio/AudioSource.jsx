import React, { Component } from "react";

class AudioSource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <audio controls className="w-full ">
        <source
          src={`data:${this.props.type};` + this.props.src}
          type={this.props.type}
        />
      </audio>
    );
  }
}

export default AudioSource;
