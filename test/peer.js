const expect  = require('chai').expect
const chaiHttp = require('chai-http')
const request = require('request')

const webSocket = require('ws')
const Server = require('mock-socket').Server

describe('BlockBox Web Socket Server', () => {
  const mockServer = new Server('ws://localhost:6001')
  const peer1 = new webSocket('ws://localhost:6002/')
  const message = 'test message'
    
  afterEach( (done) => {
    mockServer.stop(done)
  })

  it('wc server can send data to peer 1', () => {
    mockServer.on('connection', server => {
      mockServer.send(message)
      mockServer.send(message)
    })
    
    peer1.once('message', (peerMessage) => {
      expect(peerMessage).equal(JSON.stringify(message))
    })
    
  })
  
  it('wc server can send data to peer 1 and peer 2', () => {
    const peer2 = new webSocket('ws://localhost:6003/')
    mockServer.on('connection', server => {
      mockServer.send(message)
      mockServer.send(message)
    })
    
    peer1.once('message', (peerMessage) => {
      expect(peerMessage).equal(JSON.stringify(message))
    })
    peer2.once('message', (peerMessage) => {
      expect(peerMessage).equal(JSON.stringify(message))
    })
    
  })
  
})
  

  
