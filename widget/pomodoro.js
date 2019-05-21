import React from 'react'
import  FlipCountdown  from './flipcountdown'

export default class PomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTimer: false,
            startBreak: false,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            5000
        )
    }

    updateTime() {
        this.setState({startTimer: true})
    }

    _start = ()=> {
        this.setState({startTimer: true})
    }

    _stop= ()=> {
        this.setState({startTimer: false})
    }

    render() {
        return (
            <div className={'flipCountdown'}>
                <div>
                    <FlipCountdown minutes={25} start={this.state.startTimer}/>
                </div>
                <div>
                    <FlipCountdown minutes={5} start={this.state.startBreak}/>
                </div>
                <button onClick={this._start}>Start</button>
                <button onClick={this._stop}>Stop</button>
            </div>
        )
    }
}
