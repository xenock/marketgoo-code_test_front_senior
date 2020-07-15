import React from 'react'
import axios from 'axios'
import { Table, TableRow, TableCell, Button } from '@marketgoo/ola'
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

  const handleDelete = player => {
    dispatch(removePlayerAPI(player))
      .then(response => {
        toast.success(`🦄 ${player.name} removed successfully!`)
      })
      .catch(_ => {
        toast.error('🦄 There was an error...')
      })
  }

  return (
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
        {players &&
          players.map(player => (
            <TableRow key={player.id || Math.random()}>
              <TableCell variant='multiline'>{player.name}</TableCell>
              <TableCell variant='multiline'>{player.team}</TableCell>
              <TableCell variant='numeric'>{player.score}</TableCell>
              <TableCell variant='action'>
                <Button variant='primary' onClick={() => handleDelete(player)}>
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
