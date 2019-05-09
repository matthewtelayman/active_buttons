import React from 'react';
import {AliceButton} from "./Buttons/AliceButton";
import {BobButton} from "./Buttons/BobButton";
import {TextContainer} from "./TextContainer/TextContainer";
import './App.css';

const initialState = {
  displayText: "",
  activeButton: ""
}

type IAppProps = {}
type IAppState = Readonly<typeof initialState>

export class App extends React.Component<IAppProps, IAppState> {
  readonly state: IAppState = initialState

  componentDidMount() {
    console.log("App mounted!");
    this.setState({displayText: "Placeholder..."});
  }

  getButtonText(buttonName: string, buttonText: string) {
    console.log("Getting text from button component...");
    console.log(buttonText);
    this.setState({displayText: buttonText});
    this.setState({activeButton: buttonName})
  }

  render() {
    return (
      <div id="app">
        <AliceButton activeButton={this.state.activeButton} getButtonText={this.getButtonText.bind(this)} />
        <BobButton activeButton={this.state.activeButton} getButtonText={this.getButtonText.bind(this)} />
        <TextContainer displayText={this.state.displayText}/>
      </div>
    );
  }
}