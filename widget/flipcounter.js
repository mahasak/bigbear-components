import React from 'react'
import { FlipUnit } from './flipunit'

export default class FlipCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            secondsShuffle: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        // get new date
        const time = new Date;
        // set time units
        const seconds = time.getSeconds();
        // on second chanage, update seconds and shuffle state
        if( seconds !== this.state.seconds) {
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                secondsShuffle
            });
        }
    }
    render() {
        const { 
            seconds, 
            secondsShuffle 
          } = this.state;

        return (
            <FlipUnit
                max={60}
                digit={seconds}
                shuffle={secondsShuffle}
            />
        );
    }
}
