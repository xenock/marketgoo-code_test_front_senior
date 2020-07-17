import React from 'react'
import { ToastContainer } from 'react-toastify'

import style from './App.module.css'

import PlayerList from '@components/PlayerList'
import PlayerForm from '@components/PlayerForm'

const App = _ => (
  <>
    <h1 className={`${style.h1} ola-title`}>League Champion</h1>
    <main className={style.main}>
      <PlayerForm />
      <PlayerList />
    </main>
    <ToastContainer
      position='bottom-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
    />
  </>
)

export default App
