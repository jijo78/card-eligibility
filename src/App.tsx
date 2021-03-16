import React, { FC, useState } from 'react'

import styled from 'styled-components'

import { Form } from './Form'
import { CardsResults } from './CardsResults'

import { fetchCards } from './utilis/fetchData'
import { ResultList } from 'types'

interface Props {
  children?: React.ReactChildren
}

const Main = styled('main')`
  margin: 0 auto;
  max-width: 120rem;
`
const App: FC<Props> = () => {
  const [availableCards, setAvailableCards] = useState<ResultList[]>([])

  const fetchCardsOnChange = (user) => {
    const response = fetchCards(user)
    setAvailableCards(response.data)
  }

  return (
    <Main>
      <Form fetchCards={fetchCardsOnChange} />
      <CardsResults results={availableCards} />
    </Main>
  )
}

export default App
