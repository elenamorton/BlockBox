const expect  = require('chai').expect
const chaiHttp = require('chai-http')
const request = require('request')

describe('BlockBox Http server', () => {
    describe('/', () => {
      
      let url = 'http://localhost:3001/'
      it('should return status 200', (done) => {
        request(url, (error, response, body) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
      })
      
      it('should return the page body', (done) => {
        request(url, (error, response, body) => {
          expect(body).to.equal('Hello BlockBox!!')
          done()
        })
      })
      
   })
})