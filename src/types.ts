export interface ResultList {
  id: number
  name: string
  APR: string
  balanceTransferOfferDuration: string
  purchaseOfferDuration: string
  creditAvailable: number
  validateText: string
  cardImg: string
  validate: (applicant: any) => any
}
