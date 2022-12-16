import React, { Component } from "react";

export class Counter extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    buttonGood = (evt) => {
        this.add()
    }

    state = {
        value: 20,
    };

    add = () => this.setState(prevState => { return { value: prevState.value + 1 } })
    minus = () => this.setState(prevState => { return { value: prevState.value + 1 } })
    neutral = () => this.setState(prevState => { return { value: prevState.value + 1 } })

    render() {
        // console.log(this.props)
        return (<>
            <h1>Please leave feedback</h1>
            <button type="button" onClick={this.buttonGood}>good: {this.state.value}</button>
            <button type="button" onClick={this.add}>neutral: </button>
            <button type="button" onClick={this.minus}>bad: </button>
        </>)

    }
}
