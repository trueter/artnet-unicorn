import { createStore, compose } from 'redux'
import rootReducer from '../reducers'
import { DevTools } from '../components'

const enhancer = compose (
  DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
