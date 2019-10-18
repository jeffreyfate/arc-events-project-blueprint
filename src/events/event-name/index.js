const arc = require('@architect/functions')

exports.handler = async function subscribe(payload) {
  if (payload && payload.Records && Array.isArray(payload.Records)) {
    // Do something with the payload message
    // Send something to the next event
    arc.events.publish({
      name: 'next-event-name',
      payload: {
        key: value
      }
    })
  }
}