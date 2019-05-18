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

const padZero = (num) => ( num < 10 ) ? `0${currentDigit}` : num

export const FlipUnit = ({ digit, shuffle, max }) => {

    let currentDigit = digit
    let previousDigit = digit - 1

    // prevent a negative value
    previousDigit = previousDigit === -1 ? max : previousDigit

    currentDigit = padZero(currentDigit)
    previousDigit = padZero(previousDigit)

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