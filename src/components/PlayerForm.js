import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Input, Field, Button } from '@marketgoo/ola'
import { addPlayers } from '../store/slices/players'

axios.defaults.baseURL = 'http://localhost:3000'

const PlayerForm = () => {
  const dispatch = useDispatch()
  const [player, setPlayer] = useState({
    name: null,
    team: null,
    score: null
  })

  const handleChange = event => {
    setPlayer({ ...player, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { name, team, score } = player
    axios.post('/players', { name, team, score }).then(_ => {
      axios.get('/players').then(response => {
        dispatch(addPlayers(response.data.data))
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add new players</legend>
        <Field id='name' label='Player name'>
          <Input
            name='name'
            placeholder='Player name'
            onChange={handleChange}
          />
        </Field>
        <Field id='team' label='Team name'>
          <Input name='team' placeholder='Team name' onChange={handleChange} />
        </Field>
        <Field id='score' label='Team score'>
          <Input
            name='score'
            type='number'
            placeholder='Team score'
            onChange={handleChange}
          />
        </Field>
        <Button variant='primary'>Add</Button>
      </fieldset>
    </form>
  )
}

export default PlayerForm
