import React from 'react'
import { render, cleanup, waitFor, fireEvent, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { CardsResults } from './CardsResults'
import { resultsList } from '../fixtures/results-mock-resp'

const renderComponent = () => render(<CardsResults results={resultsList}></CardsResults>)

describe('<CardsResults />', () => {
  afterEach(cleanup)

  it('should render the page', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('Total Available Credit')

    await waitFor(() => {
      expect(component).toBeInTheDocument()
    })
  })
  it('should render APR', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('18.9%')
    await waitFor(() => {
      expect(component).toBeInTheDocument()
    })
  })

  it('should render Balance Transfer Offer', async () => {
    const { findAllByText } = renderComponent()
    const component = await findAllByText('0 months')
    await waitFor(() => {
      expect(component[0]).toBeInTheDocument()
    })
  })
  it('should render Months Credit Available', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('£ 1200')
    await waitFor(() => {
      expect(component).toBeInTheDocument()
    })
  })
  it('should render a list of cards', async () => {
    const { queryAllByTestId } = renderComponent()

    const li = queryAllByTestId('result-list')
    await waitFor(() => {
      expect(li.length).toBe(3)
    })
  })

  it('should update Total available credit if checkbox is checked', async () => {
    const { findAllByLabelText } = renderComponent()
    const checkbox = await findAllByLabelText('Select this Card')
    expect(screen.getByTestId('card-total')).toHaveTextContent('£ 0')

    fireEvent.click(checkbox[0])

    await waitFor(() => {
      expect(screen.getByTestId('card-total')).toHaveTextContent('£ 1200')
    })
    fireEvent.click(checkbox[1])

    await waitFor(() => {
      expect(screen.getByTestId('card-total')).toHaveTextContent('£ 1500')
    })
  })
})
