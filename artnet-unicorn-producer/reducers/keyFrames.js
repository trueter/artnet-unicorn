export const SELECT_KEYFRAME = 'SELECT_KEYFRAME'

const initialState = [
  { time: 0,    track: 0, duration: 1000, selected: false },
  { time: 500,  track: 1, duration: 1000, selected: false },
  { time: 2000, track: 2, duration: 250 , selected: false },
  { time: 250,  track: 3, duration: 500 , selected: false },
  { time: 250,  track: 2, duration: 1000, selected: false }
]

export default function keyFrames( state = initialState, action ) {
  switch (action.type) {

    case SELECT_KEYFRAME:
      return [
        ...state.slice( 0, action.payload.index ),
        {
          ...state[ action.payload.index ],
          selected: true
        },
        ...state.slice( action.payload.index + 1 )
      ]

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
