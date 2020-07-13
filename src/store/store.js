import { configureStore } from '@reduxjs/toolkit'

import playerSlice from './slices/players.js'

export default configureStore({
  reducer: {
    players: playerSlice
  }
})
