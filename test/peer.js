const expect  = require('chai').expect
const chaiHttp = require('chai-http')
const request = require('request')

const webSocket = require('ws')
const Server = require('mock-socket').Server


describe('BlockBox Web Socket Server', () => {
  const mockServer = new Server('ws://localhost:6001')
  const peer1 = new webSocket('ws://localhost:6002/')
  const message = 'test message'

  it('wc server can send data to peer 1', (done) => {
    mockServer.on('connection', server => {
      mockServer.send(message)
      mockServer.send(message)
    })
    
    peer1.once('message', (message) => {
      expect(message).equal(JSON.stringify(message))
    })
    
    mockServer.stop(done)
  })
})
