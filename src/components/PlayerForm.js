import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Input, Field, Button } from '@marketgoo/ola'
import { addPlayerAPI } from '@store/slices/players'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'http://localhost:3000'

const PlayerForm = () => {
  const dispatch = useDispatch()
  const initialPlayer = {
    name: null,
    team: null,
    score: null
  }
  const [player, setPlayer] = useState(initialPlayer)

  const handleChange = event => {
    setPlayer({ ...player, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    event.target.reset()

    dispatch(addPlayerAPI(player))
      .then(response => {
        toast.success(`🦄 ${response.payload.data.name} added successfully!`)
        setPlayer(initialPlayer)
      })
      .catch(_ => {
        toast.error('🦄 There was an error...')
        setPlayer(initialPlayer)
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
            min='0'
            onChange={handleChange}
          />
        </Field>
        <Button variant='primary'>Add</Button>
      </fieldset>
    </form>
  )
}

export default PlayerForm
