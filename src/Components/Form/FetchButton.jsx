import React, { Component } from "react";

class FetchButton extends Component {
  constructor(props) {
    super(props);
    this.doRequest = this.doRequest.bind(this);
  }

  doRequest() {
    this.props.onFetchButtonClick();
  }

  render() {
    return (
      <button
        onClick={this.doRequest}
        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white shadow-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 "
      >
        Fetch Synthesized Voice
      </button>
    );
  }
}

export default FetchButton;
