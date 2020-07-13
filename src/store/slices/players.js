import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    addPlayers: (state, { payload }) => {
      return [...state, ...payload]
    }
  }
})

export const { addPlayers } = playerSlice.actions

export default playerSlice.reducer

export const players = state => state.players
