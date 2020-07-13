import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import List from './components/List'

import store from './store/store'
import { Provider } from 'react-redux'

import './index.css'

const ENDPOINT = 'http://localhost:3000'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1 className='ola-title ola-nomargin'>League Champion</h1>
      <List />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)

const socket = io(ENDPOINT)
socket.on('update/players', data => {
  console.log(data)
})
