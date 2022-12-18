import React, { Component } from "react";

export class FeedbackOptions extends Component {
    static defaultProps = {
        options: [],
    }
    render() {
        return (this.props.options.map(btn => (<button type="button" onClick={this.props.buttonClick}>{btn}</button>)))
    }
}