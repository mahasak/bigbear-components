import React from 'react'
import  FlipCountdown  from './flipcountdown'

export default class PomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutesSession: 1,
            minutesBreak: 1,
            startTimer: false,
            startBreak: false,
        }
    }

    _startSession = ()=> {
        this.setState({startTimer: true})
    }

    _stopSession = ()=> {
        this.setState({startTimer: false})
    }

    _startBreak = () => {
        this.setState(
            {
                startBreak: true,
                startTimer: false
            }
        )
    }

    _resetSession = () => {
        this.setState(
            {
                startBreak: false,
                startTimer: false
            }
        )
    }

    _completeSession = () => {
        this._startBreak()
    }

    _completeBreak = () => {
        this.setState(
            {
                startBreak: false,
                startTimer: false
            }
        )
    }

    render() {
        return (
            <div>
                <div className={'flipCountdown'}>
                    <div>
                        <FlipCountdown 
                            minutes={this.state.minutesSession} 
                            seconds={0}
                            start={this.state.startTimer}
                            callback={this._completeSession}
                        />
                    </div>
                    <div>
                        <FlipCountdown 
                            minutes={this.state.minutesBreak} 
                            seconds={0}
                            start={this.state.startBreak}
                            callback={this._completeBreak}
                        />
                    </div>
                </div>
                <button onClick={this._startSession}>Start</button>
                <button onClick={this._stopSession}>Stop</button>
                <button onClick={this._resetSession}>Reset</button>
            </div>
        )
    }
}
