import React, { FC, useState } from 'react'

import { ResultList } from '../types'

import { Cards, Card, CardBody, CardImgWrapper } from '../Card'
import { Checkbox } from '../FormElement'

interface Props {
  results: ResultList[]
}

export const CardsResults: FC<Props> = ({ results }) => {
  const [selectedCards, setSelectedCards] = useState<any[]>([])

  const handleCardSelection = (card) => {
    const index = selectedCards.findIndex((c) => c.id === card.id)
    if (index === -1) return setSelectedCards((c) => [...c, card])
    setSelectedCards(selectedCards.filter((c) => c.id !== card.id))
  }
  return (
    <>
      <h2>Total Available Credit</h2>
      <p data-testid="card-total">
        £ {selectedCards.reduce((acc, curr) => (acc += curr.creditAvailable), 0)}
      </p>
      <Cards>
        {results &&
          results.map((result, i) => {
            return (
              <Card data-testid="result-list" key={result.id}>
                <CardImgWrapper>
                  <img src={result.cardImg} />
                </CardImgWrapper>

                <CardBody>
                  <ul>
                    <li>
                      Apr: <span>{result.APR}</span>
                    </li>
                    <li>
                      Balance Transfer Offer:<span>{result.balanceTransferOfferDuration}</span>
                    </li>
                    <li>
                      Purchase Offer: <span>{result.purchaseOfferDuration}</span>
                    </li>
                    <li>
                      Months Credit Available: <span>£ {result.creditAvailable}</span>
                    </li>
                  </ul>
                  <Checkbox
                    name={`card-${result.id}`}
                    label="Select this Card"
                    checked={selectedCards.findIndex((c) => c.id === result.id) !== -1}
                    onClick={() => handleCardSelection(result)}
                  />
                </CardBody>
              </Card>
            )
          })}
      </Cards>
    </>
  )
}
