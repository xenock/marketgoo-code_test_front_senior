import React from 'react'
import axios from 'axios'
import styles from './List.module.css'
import { Table, TableRow, TableCell, Button } from '@marketgoo/ola'

axios.defaults.baseURL = 'http://localhost:3000'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      name: null,
      team: null,
      score: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount () {
    axios.get('/players').then(response => {
      this.setState({ data: response.data })
    })
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { name, team, score } = this.state
    axios.post('/players', { name, team, score }).then(() => {
      axios.get('/players').then(response => {
        this.setState({ data: response.data })
      })
    })
  }

  handleDelete (id) {
    axios.delete(`/players/${id}`).then(() => {
      axios.get('/players').then(response => {
        this.setState({ data: response.data })
      })
    })
  }

  render () {
    const players = this.state.data

    return (
      <>
        <Table
          caption={null}
          responsive
          sticky={false}
          stiky
          className={styles.table}
        >
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
              players.data.map(player => (
                <TableRow key={player.id}>
                  <TableCell variant='multiline'>{player.name}</TableCell>
                  <TableCell variant='multiline'>{player.team}</TableCell>
                  <TableCell variant='numeric'>{player.score}</TableCell>
                  <TableCell variant='action'>
                    <Button
                      variant='primary'
                      onClick={() => this.handleDelete(player.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </Table>
        <br />
        <form onSubmit={this.handleSubmit}>
          <h4>Add new players</h4>
          <input
            name='name'
            placeholder='player name'
            onChange={this.handleChange}
          />
          <input
            name='team'
            placeholder='team name'
            onChange={this.handleChange}
          />
          <input
            name='score'
            placeholder='team score'
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </>
    )
  }
}

export default List
