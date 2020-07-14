import React from 'react'

import PlayerList from '@components/PlayerList'
import PlayerForm from '@components/PlayerForm'

const App = _ => (
  <>
    <h1 className='ola-title ola-nomargin'>League Champion</h1>
    <PlayerList />
    <PlayerForm />
  </>
)

export default App
