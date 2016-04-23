import React from 'react'
import Fixture from '../Fixture'
import { storiesOf, action } from '@kadira/storybook'

const Canvas = ({ children }) => <svg width="400" height="110">{ children }</svg>

storiesOf('Fixture', module)
  .add('unselected, no color', () =>
    <Canvas>
      <Fixture/>
    </Canvas>
  )
  .add('selected, no color', () =>
    <Canvas>
      <Fixture
        selected
      />
    </Canvas>
  )
  .add('unselected, color', () =>
    <Canvas>
      <Fixture
        color="#D0021B"
      />
    </Canvas>
  )
  .add('selected, color', () =>
    <Canvas>
      <Fixture
        selected
        color="#D0021B"
      />
    </Canvas>
  )
