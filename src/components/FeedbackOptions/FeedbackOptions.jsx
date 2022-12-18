import React, { Component } from "react";
import css from './FeedbackOptions.module.css'

export class FeedbackOptions extends Component {
    static defaultProps = {
        options: [],
    }
    render() {
        return (this.props.options.map(btn => (<button className={css.button} type="button" onClick={this.props.buttonClick}>{btn}</button>)))
    }
}