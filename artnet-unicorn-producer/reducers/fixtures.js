export const TOGGLE_FIXTURE = 'TOGGLE_FIXTURE'
// export const UPDATE_KEYFRAME = 'UPDATE_KEYFRAME'

const initialState = {
  data: [
      { id: 0,  x: 50, y: 50  },
      { id: 1,  x: 100, y: 50  },
      { id: 2,  x: 150, y: 50  },
      { id: 3,  x: 200, y: 50  },

      { id: 4,  x: 50, y: 100  },
      { id: 5,  x: 100, y: 100  },
      { id: 6,  x: 150, y: 100  },
      { id: 7,  x: 200, y: 100  },

      { id: 8,  x: 50, y: 150  },
      { id: 9,  x: 100, y: 150  },
      { id: 10, x: 150, y: 150  },
      { id: 11, x: 200, y: 150  },

      { id: 12, x: 50, y: 200  },
      { id: 13, x: 100, y: 200  },
      { id: 14, x: 150, y: 200  },
      { id: 15, x: 200, y: 200  },
  ],
  selected: []
}


export default function keyFrames( state = initialState, action ) {
  switch ( action.type ) {

    case TOGGLE_FIXTURE:

      const index = state.selected.indexOf( action.payload.index )
      let selected

      // ~ -1 == false
      // ~  0 ==  true
      // ~  1 ==  true
      // ~  2 ==  true
      if( ~ index ) { // was found, remove at index

        selected = [ ...state.selected ] // copy old contents
        selected.splice( index, 1 ) // splice edits array in place

      } else { // was not found, add if doesnt exist already

        // trick for "set"-behavior array.push
        selected = [ ...new Set([ ...state.selected, action.payload.index ]) ]
      }

      return {
        ...state,
        selected
      }

    default:
      return state
  }
}


export function toggleFixture( index ) {
  return {
    type   : TOGGLE_FIXTURE,
    payload: { index }
  }
}
