export const SELECT_KEYFRAME = 'SELECT_KEYFRAME'

const initialState = {
  frames: [
    { time: 0,    track: 0, duration: 1000, selected: false },
    { time: 500,  track: 1, duration: 1000, selected: false },
    { time: 2000, track: 2, duration: 250 , selected: false },
    { time: 250,  track: 3, duration: 500 , selected: false },
    { time: 250,  track: 2, duration: 1000, selected: false }
  ],
  selected: -1
}

export default function keyFrames( state = initialState, action ) {
  switch (action.type) {

    case SELECT_KEYFRAME:
      console.log( action )

      const newState = {
        ...state,
        selected: action.payload.index
      }
      console.log( newState )
      return newState

    default:
      return state
  }
}


export function selectKeyFrame( index ) {
  console.log( index )
  return {
    type: SELECT_KEYFRAME,
    payload: {
      index
    }
  }
}
