const bodyParser = require('body-parser')
const WebSocket = require('ws')

let sockets = [];

let p2p_port = process.env.P2P_PORT || 6001
let initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : []


let initP2PServer = () => {
    let server = new WebSocket.Server({port: p2p_port})
    server.on('connection', ws => initConnection(ws))
    console.log(`listening websocket on p2p on port: ${p2p_port}`)
}


let initConnection = (ws) => {
    sockets.push(ws)
    ws.on('message', (data) => {
        let message = JSON.parse(data)
        console.log(`Received message: ${JSON.stringify(message)}`)
        }
    })
  
    write(ws, 'Peer socket message')
}

let write = (ws, message) => ws.send(JSON.stringify(message))
