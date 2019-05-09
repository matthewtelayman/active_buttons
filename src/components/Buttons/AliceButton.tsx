import React from "react";

const initialState = {
    displayText: "",
    buttonName: "alice-button"
}

const initialProps = {
    activeButton: "",
    getButtonText: function(buttonName: string, buttonDisplayText: string) {}
}

type IAliceButtonProps = Readonly<typeof initialProps>
type IAliceButtonState = Readonly<typeof initialState>

export class AliceButton extends React.Component<IAliceButtonProps, IAliceButtonState> {
    readonly props: IAliceButtonProps = initialProps
    readonly state: IAliceButtonState = initialState

    componentDidMount() {
        console.log("AliceButton mounted!");
    }
    
    handleClick() {
        console.log("Handling AliceButton click!");
        this.setState({ displayText: "Hi from AliceButton!"}, this.passDisplayTextToParent);
    }

    passDisplayTextToParent() {
        console.log(this.state.displayText);
        this.props.getButtonText(this.state.buttonName, this.state.displayText);
    }

    render() {
        return (
            <div>
              <button className={this.props.activeButton === this.state.buttonName ? "active": ""}
                      onClick={this.handleClick.bind(this)}>
                      AliceButton
              </button>
            </div>
        );
    }
}