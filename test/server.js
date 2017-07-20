const expect  = require('chai').expect
const chaiHttp = require('chai-http')
const http = require('http')

describe('BlockBox Http server', () => {
    describe('/', () => {
      it('should return status 200', (done) => {
        http.get('http://localhost:3001/', (response) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
      })
   })
})