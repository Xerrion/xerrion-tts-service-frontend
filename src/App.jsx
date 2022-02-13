import TextInput from "./Components/Form/TextInput";
import FetchButton from "./Components/Form/FetchButton";
import { Component } from "react";
import VoiceSelector from "./Components/Form/VoiceSelector";
import InterpreterSelector from "./Components/Form/InterpreterSelector";
import AudioSource from "./Components/Audio/AudioSource";
import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

class App extends Component {
  constructor(props) {
    super(props);
    this.#handleTextInputChange = this.#handleTextInputChange.bind(this);
    this.#handleVoiceSelectChange = this.#handleVoiceSelectChange.bind(this);
    this.#handleInterpreterSelectChange =
      this.#handleInterpreterSelectChange.bind(this);
    this.#doSynthesizeRequest = this.#doSynthesizeRequest.bind(this);
    this.#setAudioSrc = this.#setAudioSrc.bind(this);

    this.state = {
      inputText: "",
      voiceId: "",
      textType: "",
      audioSrc: {
        url: "",
        type: "",
      },
    };
  }

  addAudioElementAfterRequest = () => {
    if (this.state.audioSrc.url && this.state.audioSrc.type) {
      return (
        <div id="audio-container" className="flex place-content-center w-full">
          <AudioSource
            src={this.state.audioSrc.url}
            type={this.state.audioSrc.type}
          />
        </div>
      );
    }
  };

  #setAudioSrc = (url, type) => {
    this.setState({
      audioSrc: {
        url,
        type,
      },
    });
  };

  #doSynthesizeRequest = async () => {
    const { inputText, voiceId, textType } = this.state;

    if (inputText && voiceId && textType) {
      const res = await axios.post(
        REACT_APP_BASE_URL,
        {
          text: inputText,
          voiceId,
          textType,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": REACT_APP_API_KEY,
          },
        }
      );

      console.log(res.data);

      this.#setAudioSrc(
        "https://filesamples.com/samples/audio/ogg/Symphony%20No.6%20(1st%20movement).ogg",
        "audio/ogg"
      );

      //console.log(await res.text());
    } else {
      console.log("Missing parameters");
    }
  };

  #handleTextInputChange = (inputText) => {
    this.setState({ inputText });
  };

  #handleVoiceSelectChange = (voiceId) => {
    this.setState({ voiceId });
  };

  #handleInterpreterSelectChange = (textType) => {
    this.setState({ textType });
  };

  render = () => {
    const inputText = this.state.inputText;

    return (
      <div className="flex flex-col h-screen w-1/2 place-content-center m-auto">
        <div className="flex justify-center mb-24">
          <h1 className="text-indigo-300 font-sans text-4xl font-black">
            Xerrion's TTS synthesizer
          </h1>
        </div>
        <div className="flex mb-5 place-content-center flex-col w-full space-y-3">
          <TextInput
            inputText={inputText}
            onTextInputChange={this.#handleTextInputChange}
          />
          <VoiceSelector
            voiceId={this.state.voiceId}
            onVoiceSelectChange={this.#handleVoiceSelectChange}
          />
          <InterpreterSelector
            interpreter={this.state.textType}
            onInterpreterSelectChange={this.#handleInterpreterSelectChange}
          />
          <FetchButton
            children={this.state}
            onFetchButtonClick={this.#doSynthesizeRequest}
          />
        </div>
        {this.addAudioElementAfterRequest()}
      </div>
    );
  };
}

export default App;
