import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import FlipCounter from '../widget/flipcounter'

import { FlipUnit } from '../widget/flipunit'
import FlipClock from '../widget/flipclock'

storiesOf('Button', module)
    .add('with text', () => (<Button>Hello Button</Button>))
    .add('with emoji', () => (<Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>))

storiesOf('FlipUnit', module)
    .add('default', () => (<FlipUnit
        max={60}
        digit={58}
        shuffle={true}
    />))

storiesOf('FlipCount', module)
    .add('default', () => (<FlipCounter />))

storiesOf('FlipClock', module)
    .add('default', () => (<FlipClock />))


