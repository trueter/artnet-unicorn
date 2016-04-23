import React from 'react';
import KeyFrameCanvas from '../KeyFrameCanvas';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('KeyFrameCanvas', module)
  .add('default', () =>
    <KeyFrameCanvas
      width={ 600 }
      height={ 400 }
      keyFrames={ [
        { time: 0,    track: 0, duration: 1000 },
        { time: 500,  track: 1, duration: 1000 },
        { time: 2000, track: 2, duration: 250  },
        { time: 250,  track: 3, duration: 500  },
        { time: 250,  track: 2, duration: 1000  }
      ] }
      handleKeyFrameSelection={ action('handleKeyFrameSelection') }
      handleKeyFrameDrag={ action('handleKeyFrameDrag') }
      handleKeyFrameDragEnd={ action('handleKeyFrameDragEnd') }
    />
  )
//   .add('selected, no color', () =>
//     <Fixture
//       selected
//     />
//   )
