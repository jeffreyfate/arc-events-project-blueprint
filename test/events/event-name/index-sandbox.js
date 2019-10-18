const test = require('tape')
const arc = require('@architect/functions')

/**
 * index
 */
test('index receives events', async t => {
  await arc.events.publish({
    name: 'event-name',
    payload: {
      key: value
    },
  })

  t.end()
})