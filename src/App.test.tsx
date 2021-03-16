import React from 'react'
import { cleanup, render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import App from './App'

const renderComponent = () => render(<App />)

describe('<Media />', () => {
  afterEach(cleanup)

  it('should render the form', () => {
    const { getByText } = renderComponent()
    const media = getByText('Totally Money')
    expect(media).toBeInTheDocument()
  })

  it('should render result section', () => {
    const { getByText } = renderComponent()
    const media = getByText('Total Available Credit')
    expect(media).toBeInTheDocument()
  })
})
