import React from 'react'
import List from './components/List'
import { Button } from '@marketgoo/ola'

import './index.css'

import ReactDOM from 'react-dom'
import io from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000'

const Root = () => {
  return (
    <>
      <h1>League Champion</h1>
      <Button variant='primary'>My Button</Button>
      <List />
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'))

const socket = io(ENDPOINT)
socket.on('update/players', data => {
  console.log(data)
})
