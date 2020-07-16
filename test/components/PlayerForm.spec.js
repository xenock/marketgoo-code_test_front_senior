import React from 'react'
import renderer from 'react-test-renderer'

import PlayerForm from '@components/PlayerForm.js'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}))

describe('PlayerForm snapshots', () => {
  it('renders', () => {
    const tree = renderer.create(<PlayerForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
