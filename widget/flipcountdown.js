import React from 'react'
import { FlipUnit } from './flipunit'

export default class FlipCountdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.minutes -1,
            seconds: 59,
            minuteShuffle: true,
            secondShuffle: true
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
        
        const nextValue = (this.state.seconds - 1) < 0 ? 59 : this.state.seconds - 1
        const shuffle = !this.state.secondShuffle;
        const minshuffle = !this.state.minuteShuffle;
        
        
        this.setState({
            seconds: nextValue,
            secondShuffle: shuffle
        })

        if(nextValue == 59) {
            this.setState({
                minutes: this.state.minutes-1,
                minuteShuffle: minshuffle
            })
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
                    direction='down'
                />

                <FlipUnit
                    triggerValue={60}
                    digit={seconds}
                    shuffle={secondShuffle}
                    direction='down'
                />
            </div>
        )
    }
}
