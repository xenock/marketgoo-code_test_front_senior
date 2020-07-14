import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const addPlayerAPI = createAsyncThunk(
  'players/addPlayerAPI',
  async (player, thunkAPI) => {
    const response = await axios.post('/players', player)
    console.log(response)
    return response.data
  }
)

export const removePlayerAPI = createAsyncThunk(
  'players/removePlayerAPI',
  async (id, hunkAPI) => {
    const response = await axios.delete(`/players/${id}`)
    console.log(response)
    return response.status
  }
)

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    syncPlayers: (state, { payload }) => {
      return [...payload]
    },
    addPlayer: (state, { payload }) => {
      return [...state, payload]
    },
    removePlayer: (state, { payload }) => {
      console.log('8=========D', payload)
      return state.filter(player => player.id !== payload)
    }
  },
  extraReducers: {
    [addPlayerAPI]: (state, action) => {
      console.log(state, action)
    },
    [removePlayerAPI]: (state, action) => {
      console.log(state, action)
    }
  }
})

export const { syncPlayers, addPlayer, removePlayer } = playerSlice.actions

export default playerSlice.reducer

export const players = state => state.players
