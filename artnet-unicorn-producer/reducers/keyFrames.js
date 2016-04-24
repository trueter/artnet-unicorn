export const SELECT_KEYFRAME = 'SELECT_KEYFRAME'
export const UPDATE_KEYFRAME = 'UPDATE_KEYFRAME'

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
  switch ( action.type ) {

    case SELECT_KEYFRAME:
      return {
        ...state,
        selected: action.payload.index
      }

    case UPDATE_KEYFRAME:
      const frames = state.frames
      const old = frames[ action.payload.index ]
      const { index, update } = action.payload

      return {
        ...state,
        frames: [
          ...frames.slice( 0, index ),
          {
            ...old,
            ...update
          },
          ...frames.slice( index + 1, frames.length )
        ]
      }

    default:
      return state
  }
}


export function selectKeyFrame( index ) {
  return {
    type: SELECT_KEYFRAME,
    payload: {
      index
    }
  }
}


export function updateKeyFrame( index, update ) {
  return {
    type: UPDATE_KEYFRAME,
    payload: {
      index,
      update
    }
  }
}
