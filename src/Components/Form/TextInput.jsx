import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const prevEntry = localStorage.getItem("inputText");
    const inputValue = event.target.value;

    if (inputValue !== prevEntry) {
      localStorage.setItem("inputText", inputValue);
      this.props.onTextInputChange(inputValue);
    }
  };

  render() {
    const inputText = this.props.inputText;

    return (
      <input
        onChange={this.handleChange}
        type="text"
        placeholder="Enter text to be synthesized"
        value={inputText}
        className="py-2 px-5 border-4 bg-indigo-500 border-transparent focus-visible:border-indigo-800 text-sm placeholder:text-indigo-300 text-indigo-100 rounded-md font-medium placeholder:overflow-visible focus-visible:outline-0"
      />
    );
  }
}

export default TextInput;
