import React from "react";

const initialProps = {
    displayText: ""
}

type ITextContainerProps = Readonly<typeof initialProps>
type ITextContainerState = {}

export class TextContainer extends React.Component<ITextContainerProps, ITextContainerState> {
    readonly props: ITextContainerProps = initialProps

    componentDidMount() {
        console.log("TextContainer mounted!");
    }

    render() {
        return (
            <div id="textcontainer">
                {this.props.displayText}
            </div>
        );
    }
}