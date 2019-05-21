import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import FlipCounter from '../widget/flipcounter'

import { FlipUnit } from '../widget/flipunit'
import FlipClock from '../widget/flipclock'
import FlipCountdown from '../widget/flipcountdown'
import FlipTimer from '../widget/fliptimer'
import PomodoroTimer from '../widget/pomodoro'

storiesOf('Button', module)
    .add('with text', () => (<Button>Hello Button</Button>))
    .add('with emoji', () => (<Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>))

storiesOf('FlipUnit', module)
    .add('default', () => (<FlipUnit
        max={60}
        digit={58}
        shuffle={true}
    />))

storiesOf('FlipCounter', module)
    .add('default', () => (<FlipCounter />))

storiesOf('FlipCountdown', module)
    .add('default', () => (<FlipCountdown minutes={1} start={true}/>))

storiesOf('FlipTimer', module)
    .add('default', () => (<FlipTimer minutes={2} />))

storiesOf('FlipClock', module)
    .add('default', () => (<FlipClock />))

storiesOf('PomodoroTimer', module)
    .add('default', () => (<PomodoroTimer />))
