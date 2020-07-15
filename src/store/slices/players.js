import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const addPlayerAPI = createAsyncThunk(
  'players/addPlayerAPI',
  async (player, thunkAPI) => {
    const response = await axios.post('/players', player)
    return response.data
  }
)

export const removePlayerAPI = createAsyncThunk(
  'players/removePlayerAPI',
  async (player, thunkAPI) => {
    await axios.delete(`/players/${player.id}`)
    return player
  }
)

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    syncPlayers: (state, { payload }) => {
      return [...payload]
    }
  },
  extraReducers: {
    [addPlayerAPI.fulfilled]: (state, action) => {
      return [...state, action.payload.data]
    },
    [removePlayerAPI.fulfilled]: (state, action) => {
      return state.filter(player => player.id !== action.payload.id)
    }
  }
})

export const { syncPlayers, addPlayer, removePlayer } = playerSlice.actions

export default playerSlice.reducer

export const players = state => state.players
