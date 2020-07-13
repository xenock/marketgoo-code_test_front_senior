import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {}
})

export const { addToCart } = playerSlice.actions

export default playerSlice.reducer

export const players = state => state.players
