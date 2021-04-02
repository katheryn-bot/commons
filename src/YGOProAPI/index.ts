import fetch from 'node-fetch'

import {
  RequestCard,
  YGOResponse,
} from './scheme.cards'

const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php/'

export const requestCard = ({
  name,
  fuzzySearch,
  byArchetype,
  ...parameters
}: RequestCard): Promise<YGOResponse> => new Promise((resolve, reject) => {
  const prefix = byArchetype
    ? `?archetype=${name}`
    : fuzzySearch
      ? `?fname=${name}`
      : `?name=${name}`

  const requestURL = []

  const params = Object.entries(parameters)
    .map(([key, value]) => `&${key}=${value}`)
    .join()

  requestURL.push(BASE_URL)
  requestURL.push(prefix)
  requestURL.push(params)
  requestURL.push('&misc=yes')

  fetch(requestURL.join(''))
    .then((resp) => resp.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error))
})

// INCREASE PRICE BY 500 FOR EVERY DOLLAR
export const calcPrice = (price: string): number => {
  let priceToFloat = 0
  const segments = price.split('.')

  if (segments[0] === '0') {
    console.log(parseFloat(segments[1].split('').join('.')))
    priceToFloat += Math.round(parseFloat(segments[1].split('').join('.'))) * 10
  } else {
    priceToFloat += parseInt(segments[0]) * 100
  }

  return ((priceToFloat / 2) + 50) * 10
}
