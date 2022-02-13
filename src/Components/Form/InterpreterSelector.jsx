import React, { Component } from "react";

class InterpreterSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle the changing of the interpreter
  handleChange = (event) => {
    const index = event.nativeEvent.target.selectedIndex;
    const selectedVoice = event.nativeEvent.target[index].value;

    this.props.onInterpreterSelectChange(selectedVoice);
  };

  renderInterpreters = () => {
    // Hardcoded since this is the only 2 that Amazon supports
    const interpreters = ["ssml", "text"];

    // Populate the dropdown with the supported interpreters
    return interpreters.map((interpreter) => {
      return (
        <option value={interpreter} key={interpreter}>
          {interpreter}
        </option>
      );
    });
  };

  render() {
    return (
      <select
        onChange={this.handleChange}
        defaultValue=""
        id="interpreter-selector"
        className="form-select appearance-none py-2 px-4 border-4 bg-indigo-500 border-transparent focus-visible:border-indigo-800 text-sm placeholder:text-indigo-300 text-indigo-100 rounded-md font-medium placeholder:overflow-visible focus-visible:outline-0"
      >
        <option value="" disabled hidden>
          Select an interpreter
        </option>
        {this.renderInterpreters()}
      </select>
    );
  }
}

export default InterpreterSelector;
