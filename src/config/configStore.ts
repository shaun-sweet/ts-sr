import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import history from './history'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// eslint-disable-next-line
import { routerMiddleware } from 'react-router-redux'
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}
// Now you can dispatch navigation actions from anywhere!
const middlewares = [
  ReduxThunk,
  routerMiddleware(history)
]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'dropbox',
  whitelist: ['dropbox'],
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore (initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
  const persistor = persistStore(store)

  /* istanbul ignore if  */
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer') // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }
  return { store, persistor }
}
