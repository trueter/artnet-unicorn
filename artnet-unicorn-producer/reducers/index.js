import { combineReducers } from 'redux'
import keyFrames from './keyFrames'
import fixtures from './fixtures'

const rootReducer = combineReducers({
  keyFrames, fixtures
})

export default rootReducer
