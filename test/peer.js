const expect  = require('chai').expect
const chaiHttp = require('chai-http')
const request = require('request')
const webSocket = require('ws')

describe('BlockBox Web Socket Server', () => {
  let url = 'http://localhost:6001/'

  before(() => {
    peer1 = new webSocket(url)
    peer2 = new webSocket(url)
  })

  it('peer 1 can send data to peer 2', (done) => {
    let message1 = {
      id: 'message1',
      data: 'Peer 1 message'
    }
    peer1.send(JSON.stringify(message1))
    peer2.once('message', (message) => {
      expect(message).equal(JSON.stringify(message1)),
      done();
    })
  })
})
