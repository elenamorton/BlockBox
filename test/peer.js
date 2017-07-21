const expect  = require('chai').expect
const webSocket = require('ws')
const Server = require('ws').Server

describe('BlockBox Web Socket Server', () => {
  const server = new Server({ port: 6001 })
  const message = 'test message'
  server.on('connection', ws => {
    ws.send(message)
  })

  it('wc server can send data to peer 1', () => {
    const peer = new webSocket('ws://localhost:6001/')
    let receivedMessage;
    
    peer.onmessage = (event) => {
      receivedMessage = event.data
    }
    
    expect(receivedMessage).equal(message)
  })
  
  it('wc server can send data to peer 1 and peer 2', () => {
    const peer = new webSocket('ws://localhost:6001/')
    const peer2 = new webSocket('ws://localhost:6001/')
    
    peer.onmessage = (event) => {
      expect(event.data).equal(message)
    }
    
    peer2.onmessage = (event) => {
      expect(event.data).equal(message)
    }
    
  })
  
})
  

  
