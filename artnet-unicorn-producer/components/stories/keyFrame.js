import React from 'react';
import KeyFrame from '../KeyFrame';
import { storiesOf, action } from '@kadira/storybook';

const Canvas = ({ children }) => <svg width="400" height="110">{ children }</svg>

storiesOf('KeyFrame', module)
  .add('default', () =>
    <Canvas>
      <KeyFrame
        x={ 50 }
        y={ 50 }
        width={ 100 }
      />
    </Canvas>

  )
