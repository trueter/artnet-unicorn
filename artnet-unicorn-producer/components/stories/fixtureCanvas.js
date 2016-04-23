import React from 'react';
import FixtureCanvas from '../FixtureCanvas';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('FixtureCanvas', module)
  .add('none selected', () => 
    <FixtureCanvas width="600" height="400" fixtures={
        [
            { x: 50, y: 50, selected: false },
            { x: 100, y: 50, selected: false },
            { x: 150, y: 50, selected: false },
            { x: 200, y: 50, selected: false },
            
            { x: 50, y: 100, selected: false },
            { x: 100, y: 100, selected: false },
            { x: 150, y: 100, selected: false },
            { x: 200, y: 100, selected: false },
            
            { x: 50, y: 150, selected: false },
            { x: 100, y: 150, selected: false },
            { x: 150, y: 150, selected: false },
            { x: 200, y: 150, selected: false },
            
            { x: 50, y: 200, selected: false },
            { x: 100, y: 200, selected: false },
            { x: 150, y: 200, selected: false },
            { x: 200, y: 200, selected: false },
        ]
    }/>
  )
//   .add('selected, no color', () => 
//     <Fixture 
//       selected
//     />
//   )