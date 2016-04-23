import React from 'react';
import Fixture from '../Fixture';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Fixture', module)
  .add('unselected, no color', () => 
    <Fixture/>
  )
  .add('selected, no color', () => 
    <Fixture 
      selected
    />
  )
  .add('unselected, color', () => 
    <Fixture
      color={ "#D0021B" }
    />
  )
  .add('selected, color', () => 
    <Fixture 
      selected
      color={ "#D0021B" }
    />
  )
  

