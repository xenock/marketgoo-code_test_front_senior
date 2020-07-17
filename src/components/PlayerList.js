import React, { useState } from 'react'
import axios from 'axios'
import {
  Table,
  TableRow,
  TableCell,
  Spinner,
  ButtonIcon,
  Icon
} from '@marketgoo/ola'
import { removePlayerAPI, players as storedPlayers } from '@slices/players.js'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './PlayerList.module.css'

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

  return (
    <div className={styles.list}>
      {!players.length ? (
        <Spinner size='big' />
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
                  <ButtonIcon
                    as='button'
                    busy={synchronizing.includes(player.id)}
                    onClick={() => handleDelete(player)}
                    variant='primary'
                  >
                    <Icon className={null} name='close' size='medium' />
                  </ButtonIcon>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default PlayerList
