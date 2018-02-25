import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import storeConfig from './config/configStore'
import { ConnectedRouter } from 'react-router-redux'
import history from './config/history'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './features/common/components/Layout'
const { store, persistor } = storeConfig()

function renderApp () {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Layout />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept(() => {
    renderApp()
  })
}
