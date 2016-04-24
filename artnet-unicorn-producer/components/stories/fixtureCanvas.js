import React from 'react';
import FixtureCanvas from '../FixtureCanvas';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('FixtureCanvas', module)
  .add('none selected', () =>
    <FixtureCanvas width={ 600 } height={ 400 } fixtures={
        [
            { id: 0,  x: 50, y: 50, selected: false },
            { id: 1,  x: 100, y: 50, selected: false },
            { id: 2,  x: 150, y: 50, selected: false },
            { id: 3,  x: 200, y: 50, selected: false },

            { id: 4,  x: 50, y: 100, selected: false },
            { id: 5,  x: 100, y: 100, selected: false },
            { id: 6,  x: 150, y: 100, selected: false },
            { id: 7,  x: 200, y: 100, selected: false },

            { id: 8,  x: 50, y: 150, selected: false },
            { id: 9,  x: 100, y: 150, selected: false },
            { id: 10, x: 150, y: 150, selected: false },
            { id: 11, x: 200, y: 150, selected: false },

            { id: 12, x: 50, y: 200, selected: false },
            { id: 13, x: 100, y: 200, selected: false },
            { id: 14, x: 150, y: 200, selected: false },
            { id: 15, x: 200, y: 200, selected: false },
        ]
    } handleSelect={ action('handleFixtureClick') }/>
  )
  .add('second row selected', () =>
    <FixtureCanvas width={ 600 } height={ 400 } fixtures={
        [
            { id: 0,  x: 50, y: 50, selected: false },
            { id: 1,  x: 100, y: 50, selected: false },
            { id: 2,  x: 150, y: 50, selected: false },
            { id: 3,  x: 200, y: 50, selected: false },

            { id: 4,  x: 50, y: 100, selected: true },
            { id: 5,  x: 100, y: 100, selected: true },
            { id: 6,  x: 150, y: 100, selected: true },
            { id: 7,  x: 200, y: 100, selected: true },

            { id: 8,  x: 50, y: 150, selected: false },
            { id: 9,  x: 100, y: 150, selected: false },
            { id: 10, x: 150, y: 150, selected: false },
            { id: 11, x: 200, y: 150, selected: false },

            { id: 12, x: 50, y: 200, selected: false },
            { id: 13, x: 100, y: 200, selected: false },
            { id: 14, x: 150, y: 200, selected: false },
            { id: 15, x: 200, y: 200, selected: false },
        ]
    } handleSelect={ action('handleFixtureClick') }/>
  )
