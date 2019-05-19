import React from 'react'
import { FlipUnit } from './flipunit'

export default class FlipCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            secondsShuffle: true
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            50
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        const time = new Date;
        const seconds = time.getSeconds();

        if (seconds !== this.state.seconds) {
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                secondsShuffle
            })
        }
    }
    render() {
        const {
            seconds,
            secondsShuffle
        } = this.state

        return (
            <FlipUnit
                triggerValue={60}
                digit={seconds}
                shuffle={secondsShuffle}
                direction='up'
            />
        )
    }
}
