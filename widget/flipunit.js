import React from 'react'
import './flipunit.sass'

const AnimatedCard = ({ animation, digit }) => {
    return (
        <div className={`flipCard ${animation}`}>
            <span>{digit}</span>
        </div>
    )
}

const StaticCard = ({ position, digit }) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    )
}

const padZero = (num) => (num < 10) ? `0${num}` : num
const calculatePrevious = (digit, direction, triggerValue) => {
    let previousDigit = (direction === 'up')
        ? digit - 1
        : (digit == 0) ? 0 : digit + 1

    previousDigit = (direction === 'down' && previousDigit === 60) ? 0 : previousDigit

    return (direction === 'down')
        ? padZero(previousDigit)
        : padZero((previousDigit === -1) ? triggerValue - 1 : previousDigit)
}

export const FlipUnit = ({ digit, shuffle, triggerValue, direction }) => {

    let currentDigit = padZero(digit)
    let previousDigit = calculatePrevious(digit, direction, triggerValue)

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit
    const digit2 = !shuffle ? previousDigit : currentDigit

    // shuffle animations
    const animation1 = shuffle ? 'fold' : 'unfold'
    const animation2 = !shuffle ? 'fold' : 'unfold'

    return (
        <div className={'flipUnitContainer'}>
            <StaticCard
                position={'upperCard'}
                digit={currentDigit}
            />
            <StaticCard
                position={'lowerCard'}
                digit={previousDigit}
            />
            <AnimatedCard
                digit={digit1}
                animation={animation1}
            />
            <AnimatedCard
                digit={digit2}
                animation={animation2}
            />
        </div>
    )
}