import React from 'react'

import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { Form } from './Form'

let props: any

const fetchCardsMock = jest.fn()
describe('<Form />', () => {
  const _LABEL = /Select a title/i

  beforeEach(() => {
    props = {
      fetchCards: fetchCardsMock,
    }
    fetchCardsMock.mockReturnValue({ title: 'Mr', lastName: 'blah' })
    fetchCardsMock()
  })

  afterEach(() => {
    cleanup
    jest.resetAllMocks()
  })
  it('should render the form', async () => {
    const { getByLabelText } = render(<Form {...props}></Form>)
    const form = getByLabelText(_LABEL)

    expect(form).toBeInTheDocument()
  })
  it('should call fetchCards', async () => {
    const { findByText } = render(<Form {...props}></Form>)
    const form = await findByText('Submit')
    fireEvent.submit(form)
    await waitFor(() => {
      expect(fetchCardsMock).toHaveBeenCalled()
    })
  })

  it('should call fetchCards on pressing enter key', async () => {
    const { findByText } = render(<Form {...props}></Form>)

    const form = await findByText('Submit')
    fireEvent.keyDown(form, { key: 'Enter', code: 13, charCode: 13 })

    await waitFor(() => {
      expect(fetchCardsMock).toHaveBeenCalled()
    })
  })

  it('should select value onChange for dropdown', async () => {
    const { getByLabelText } = render(<Form {...props}></Form>)
    const SelectATitle = getByLabelText('Select a title') as HTMLInputElement
    const e = {
      target: { value: 'Mr' },
    }

    fireEvent.change(SelectATitle, e)

    waitFor(() => {
      expect(SelectATitle.value).toEqual('Mr')
    })
  })

  it('should call onChange for input', async () => {
    const { getByLabelText } = render(<Form {...props}></Form>)
    const FirstName = getByLabelText('First name') as HTMLInputElement
    const e = {
      target: { value: 'My name' },
    }

    fireEvent.change(FirstName, e)

    waitFor(() => {
      expect(FirstName.value).toEqual('My name')
    })
  })
})
