import React from 'react'
import renderer from 'react-test-renderer'
import playersFixtures from '@fixtures/players.js'
import { useSelector } from 'react-redux'

import PlayerList from '@components/PlayerList.js'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(fn => fn())
}))

describe('PlayerList snapshots', () => {
  it('renders a spinner', () => {
    useSelector.mockReturnValue([])
    const tree = renderer.create(<PlayerList />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a list', () => {
    useSelector.mockReturnValue(playersFixtures)
    const tree = renderer.create(<PlayerList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
