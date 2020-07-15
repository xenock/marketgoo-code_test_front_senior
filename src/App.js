import React from 'react'
import { ToastContainer } from 'react-toastify'

import PlayerList from '@components/PlayerList'
import PlayerForm from '@components/PlayerForm'

const App = _ => (
  <>
    <h1 className='ola-title ola-nomargin'>League Champion</h1>
    <PlayerList />
    <PlayerForm />
    <ToastContainer
      position='bottom-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
)

export default App
