module.exports = [
  {
    id: 1,
    name: 'Student Life',
    APR: '18.9%',
    balanceTransferOfferDuration: '0 months',
    purchaseOfferDuration: '6 Months',
    creditAvailable: 1200,
    validateText:
      'The Student Life credit card is only available to customers with an employment status of Student.',
    validate: (applicant) => {
      return applicant.employment.match(/student/i)
    },
    cardImg:
      'https://www.bankofthewest.com/-/media/Images-responsive/personal/credit-cards/cash-back-world-card.png',
  },
  {
    id: 2,
    name: 'Anywhere Card',
    APR: '33.9%',
    balanceTransferOfferDuration: '0 months',
    purchaseOfferDuration: '0 Months',
    creditAvailable: 300,
    validateText: 'The anywhere card is available to anyone anywhere.',
    validate: (applicant) => {
      return true
    },
    cardImg: 'https://ddialhyn49dxu.cloudfront.net/cards/santanderallinone2021-large.png',
  },
  {
    id: 3,
    name: 'Liquid Card',
    APR: '33.9%',
    balanceTransferOfferDuration: '12 months',
    purchaseOfferDuration: '6 Months',
    creditAvailable: 3000,
    validateText:
      'The Liquid card is a card available to customers who have an income of more than £16000.',
    validate: (applicant) => {
      return Number(applicant.income) > 16000
    },
    cardImg: 'https://ddialhyn49dxu.cloudfront.net/cards/virginredaug2020-large.png',
  },
]
