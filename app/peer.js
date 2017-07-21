const bodyParser = require('body-parser')
const webSocket = require('ws')

let sockets = [];

const p2p_port = process.env.P2P_PORT || 6001
const initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : []


let initP2PServer = () => {
    let webServer = new webSocket.Server({port: p2p_port})
    webServer.on('connection', ws => initConnection(ws))
    console.log(`listening websocket on p2p on port: ${p2p_port}`)
}


let initConnection = (ws) => {
    sockets.push(ws)
  
    ws.on('message', (data) => {
        let message = JSON.parse(data)
        console.log(`Received message: ${JSON.stringify(message)}`)
        })
    }
  
    ws.send(JSON.stringify('Peer socket message'))
}

module.exports = initP2PServer