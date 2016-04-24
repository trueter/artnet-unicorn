import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import ColorPicker from '../ColorPicker'

storiesOf('ColorPicker', module)
  .add('#E27D79', () =>
    <ColorPicker color="#E27D79" />
  )
  .add('White', () =>
    <ColorPicker color="#FFFFFF" />
  )
  .add('Black', () =>
    <ColorPicker color="#000000" />
  )