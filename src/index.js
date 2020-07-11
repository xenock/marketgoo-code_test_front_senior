import React from 'react'
import List from './components/List'

import './index.css'

import ReactDOM from 'react-dom'
import io from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000'

const Root = () => {
  return (
    <>
      <h1 className='ola-title ola-nomargin'>League Champion</h1>
      <List />
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'))

const socket = io(ENDPOINT)
socket.on('update/players', data => {
  console.log(data)
})
