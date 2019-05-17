import React from 'react'
import {storiesOf} from '@storybook/react'
import {FlipClock} from '../widget'


storiesOf('Button2', module)
    .add('with text', () => (<FlipClock/>))
    .add('with emoji', () => (<Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>))




