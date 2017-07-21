const expect  = require('chai').expect
const chaiHttp = require('chai-http')
const request = require('request')

const webSocket = require('ws')
const mockServer = require('mock-socket').Server


describe('BlockBox Web Socket Server', () => {

  let peer1 = new webSocket('ws://localhost:6001/')
  let peer2 = new webSocket('ws://localhost:6002/')

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
