import cardData from '../config'
import { ResultList } from 'types'

function fetchCards(user: ResultList) {
  return { data: cardData.filter((card) => card.validate(user)) }
}

export { fetchCards }
