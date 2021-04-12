import test from 'ava'
import { requestCard } from '../src/YGOProAPI'

test('YGOPRO WRAPPER | FETCH CARD', async (t) => {
  const name = 'Black Rose Dragon'

  const incomingCard = await requestCard({
    name,
    fuzzySearch: false,
    byArchetype: false
  })

  t.is(incomingCard.data[0].name, name)
})

test('YGOPRO WRAPPER | SEARCH CARDS', async (t) => {
  const query = 'Dark Magician'

  const incomingCards = await requestCard({
    name: query,
    fuzzySearch: true,
    byArchetype: false,
  })

  t.is(incomingCards.data[0].name, 'Dark Magician')
  t.is(incomingCards.data[1].name, 'Dark Magician Girl')
})
