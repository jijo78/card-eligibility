import React from 'react'

import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { Form } from './Form'

let props: any

const onChangeMock = jest.fn()
const onSubmitMock = jest.fn()
const fetchCardsMock = jest.fn()
describe('<Form />', () => {
  const _LABEL = /Select a title/i

  beforeEach(() => {
    props = {
      handleChange: onChangeMock,
      onSubmit: onSubmitMock,
      fetchCards: fetchCardsMock,
    }
  })

  afterEach(() => {
    cleanup
    jest.resetAllMocks()
  })
  it('should render the form', async () => {
    const { getByLabelText, container } = render(<Form {...props}></Form>)
    console.log('container: ', container.innerHTML)
    const form = getByLabelText(_LABEL)

    expect(form).toBeInTheDocument()
  })
  it('should call onSubmit', async () => {
    const { findByText } = render(<Form {...props}></Form>)
    const form = findByText('Submit')

    fireEvent.submit(await form)
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalled()
    })
  })

  //Tried to test the on enter event but react testing library seems to have an
  //issue with firing key event as discussed bby the same library author
  // https://github.com/testing-library/dom-testing-library/issues/405,
  //https://github.com/testing-library/react-testing-library/issues/269
  it.skip('should call submit on pressing enter key', async () => {
    const { getByText } = render(<Form {...props}></Form>)

    const input = getByText('Search')
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 })

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalled()
    })
  })
  it('should call onChange ', async () => {
    const { findByPlaceholderText } = render(<Form {...props}></Form>)

    const input = await findByPlaceholderText('Last Name')

    fireEvent.change(input, { target: { value: 'Name' } })

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalled()
    })
  })
})
