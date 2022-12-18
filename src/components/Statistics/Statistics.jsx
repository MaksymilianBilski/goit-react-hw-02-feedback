import React, { Component } from "react";


export class Statistics extends Component {
    static defaultProps = {
        stats: {
            good: 0,
            neutral: 0,
            bad: 0
        },
        total: 0,
        positive: 0,
    }

    render() {
        if (this.props.total === 0) {
            return
        }
        else
            return (
                <ul>
                    <li>good: {this.props.stats.good}</li>
                    <li>neutral: {this.props.stats.neutral}</li>
                    <li>bad: {this.props.stats.bad}</li>
                    <li>Total: {this.props.total}</li>
                    <li>Positive: {isNaN(this.props.positive) ? (0) : (this.props.positive)} %</li>
                </ul>)
    }
}