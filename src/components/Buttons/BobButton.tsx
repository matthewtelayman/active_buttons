import React from "react";

const initialState = {
    displayText: "",
    buttonName: "bob-button",
}

const initialProps = {
    activeButton: "",
    getButtonText: function(buttonName: string, buttonDisplayText: string) {}
}

type IBobButtonProps = Readonly<typeof initialProps>
type IBobButtonState = Readonly<typeof initialState>

export class BobButton extends React.Component<IBobButtonProps, IBobButtonState> {
    readonly props: IBobButtonProps = initialProps
    readonly state: IBobButtonState = initialState

    componentDidMount() {
        console.log("BobButton mounted!");
    }

    handleClick() {
        console.log("Handling BobButton click!");
        this.setState({displayText: "Hi from BobButton!"}, this.passToParent);
    }

    passToParent(){
        console.log(this.state.displayText);
        this.props.getButtonText(this.state.buttonName, this.state.displayText);
    }

    render() {
        return (
            <div>
              <button className={this.props.activeButton === this.state.buttonName ? "active" : ""} onClick={this.handleClick.bind(this)}>BobButton</button>
            </div>
        );
    }
}