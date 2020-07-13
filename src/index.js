import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import App from './App'

import store from './store/store'
import { Provider } from 'react-redux'

import './index.css'

const ENDPOINT = 'http://localhost:3000'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)

const socket = io(ENDPOINT)
socket.on('update/players', data => {
  console.log(data)
})
