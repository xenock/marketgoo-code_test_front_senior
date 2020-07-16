import reducer, {
  syncPlayers,
  addPlayerAPI,
  removePlayerAPI
} from '@slices/players.js'
import payloadPlayers from '@fixtures/players.js'

describe('players slice', () => {
  describe('reducer, actions, and selectors', () => {
    it('should return initial state on first run', () => {
      const nextState = []

      const result = reducer(undefined, {})

      expect(result).toEqual(nextState)
    })
    it('should set new state when provided', () => {
      const result = reducer([], syncPlayers(payloadPlayers))

      expect(result).toEqual(payloadPlayers)
    })
    it('extraReducers addPlayerAPI.fulfilled', () => {
      const firstPlayer = payloadPlayers[0]
      const action = {
        type: addPlayerAPI.fulfilled.type,
        payload: firstPlayer
      }

      const result = reducer([], action)

      expect(result).toEqual([firstPlayer])
    })

    it('extraReducers removePlayerAPI.fulfilled', () => {
      const [firstPlayer, ...restPlayers] = payloadPlayers

      const action = {
        type: removePlayerAPI.fulfilled.type,
        payload: firstPlayer
      }

      const result = reducer(payloadPlayers, action)

      expect(result).toEqual(restPlayers)
    })
  })
})
