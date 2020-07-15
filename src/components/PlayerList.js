import React, { useState } from 'react'
import axios from 'axios'
import { Table, TableRow, TableCell, Button, Spinner } from '@marketgoo/ola'
import {
  removePlayerAPI,
  players as storedPlayers
} from '@store/slices/players'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'http://localhost:3000'

const PlayerList = _ => {
  const dispatch = useDispatch()
  const players = useSelector(storedPlayers)
  const [synchronizing, setSynchronizing] = useState([])

  const handleDelete = player => {
    setSynchronizing([...synchronizing, player.id])
    dispatch(removePlayerAPI(player))
      .then(response => {
        toast.success(`🦄 ${player.name} removed successfully!`)
        setSynchronizing(synchronizing.filter(id => id !== player.id))
      })
      .catch(_ => {
        toast.error('🦄 There was an error...')
        setSynchronizing(synchronizing.filter(id => id !== player.id))
      })
  }

  return !players.length ? (
    <Spinner className={null} size='big' />
  ) : (
    <Table caption={null} responsive sticky={false} stiky>
      <thead>
        <TableRow>
          <TableCell header variant='left'>
            Player
          </TableCell>
          <TableCell header variant='left'>
            Team
          </TableCell>
          <TableCell header variant='right'>
            Score
          </TableCell>
          <TableCell header variant='center'>
            Actions
          </TableCell>
        </TableRow>
      </thead>
      <tbody>
        {players.map(player => (
          <TableRow key={player.id || Math.random()}>
            <TableCell variant='multiline'>{player.name}</TableCell>
            <TableCell variant='multiline'>{player.team}</TableCell>
            <TableCell variant='numeric'>{player.score}</TableCell>
            <TableCell variant='action'>
              <Button
                busy={synchronizing.includes(player.id) && 'Synchronizing'}
                variant='primary'
                onClick={() => handleDelete(player)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}

export default PlayerList
