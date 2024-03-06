import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
// import { LoginPages } from './auth/pages/LoginPages'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
// import { RegisterPages } from './auth/pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>,
  </React.StrictMode>,
)
