import React, { Component } from "react";
import { Voices } from "../Extra/Voices";

class VoiceSelector extends Component {
  constructor(props) {
    super(props);

    this.#handleChange = this.#handleChange.bind(this);
  }

  #renderVoices = () => {
    return Voices.map((voice) => {
      return (
        <option value={voice.Id} key={voice.Id}>
          {voice.Name} | {voice.Gender} | {voice.LanguageName}
        </option>
      );
    });
  };

  #handleChange = (event) => {
    const index = event.nativeEvent.target.selectedIndex;
    const selectedVoice = event.nativeEvent.target[index].value;

    this.props.onVoiceSelectChange(selectedVoice);
  };

  render() {
    return (
      <select
        onChange={this.#handleChange}
        defaultValue=""
        id="voice-selector"
        className="form-select appearance-none py-2 px-4 border-4 bg-indigo-500 border-transparent focus-visible:border-indigo-800 text-sm placeholder:text-indigo-300 text-indigo-100 rounded-md font-medium placeholder:overflow-visible focus-visible:outline-0"
      >
        <option value="" disabled hidden>
          Select a voice to use
        </option>
        {this.#renderVoices()}
      </select>
    );
  }
}

export default VoiceSelector;
