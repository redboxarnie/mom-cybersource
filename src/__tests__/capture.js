const fs = require('fs')
const capture = require('../capture')
require('../../tests/globalSetup.js')
const PaymentRequest = require('../../tests/PaymentRequest.js')
const processPayment = require('../../tests/createPayment.js')


const reducer = (accumulator, currentValue) => {
  accumulator = accumulator + ( currentValue['unit_price_gross'] * currentValue['quantity']);
  return accumulator
}

test('Full Capture', done => {
  function callback (err, data) {
    if (err) {
      done()
    }
    expect(data).toHaveProperty('access_token')
    done()
  }
  let message =  JSON.parse(fs.readFileSync('./__mockData__/magento.payments.payments_management.capture.json', 'utf8'))
  paymentMessage = message.params.payment
  amount = paymentMessage.lines.reduce(reducer,0);
  paymentRequestMock = new PaymentRequest(paymentMessage.currency,amount,false)
  processPayment.processPayment(currency, amount, function (error, data) {
      let id = data.
    capture.process()
      },false)
})
