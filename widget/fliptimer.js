import React from 'react'
import { FlipUnit } from './flipunit'

export default class FlipTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetMinute: this.props.minutes,
            minutes: 0,
            seconds: 1,
            minuteShuffle: true,
            secondShuffle: true,
            stop: false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        const nextValue = (this.state.seconds + 1) < 60 ? this.state.seconds + 1 : 0
        const shuffle = !this.state.secondShuffle;
        const minshuffle = !this.state.minuteShuffle;
        
        
        this.setState({
            seconds: nextValue,
            secondShuffle: shuffle
        })

        if(nextValue == 0) {
            if(this.state.minutes + 1 < this.state.targetMinute) {
                this.setState({
                    minutes: this.state.minutes + 1,
                    minuteShuffle: minshuffle
                })
            } else {
                this.setState({
                    minutes: this.state.minutes + 1,
                    minuteShuffle: minshuffle,
                    seconds: 0,
                    secondShuffle: true,
                    stop: true
                })
                clearInterval(this.timerID)
            }
        }

    }

    render() {
        const {
            minutes,
            seconds,
            minuteShuffle,
            secondShuffle
        } = this.state

        return (
            <div className={'flipCountdown'}>
                <FlipUnit
                    triggerValue={60}
                    digit={minutes}
                    shuffle={minuteShuffle}
                    direction='up'
                />

                <FlipUnit
                    triggerValue={60}
                    digit={seconds}
                    shuffle={secondShuffle}
                    direction='up'
                />
            </div>
        )
    }
}
