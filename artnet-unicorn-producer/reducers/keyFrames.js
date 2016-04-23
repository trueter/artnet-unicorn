import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'


const initialState = [
  { time: 0,    track: 0, duration: 1000 },
  { time: 500,  track: 1, duration: 1000 },
  { time: 2000, track: 2, duration: 250  },
  { time: 250,  track: 3, duration: 500  },
  { time: 250,  track: 2, duration: 1000  }
]

export default function keyFrames(state = initialState, action) {
  switch (action.type) {
    
    default:
      return state
  }
}
