const cybersourceRestApi = require('cybersource-rest-client')
const reducer = (accumulator, currentValue) => {
  accumulator = accumulator + ( currentValue['unit_price_gross'] * currentValue['quantity']);
  return accumulator
}
exports.process =  (payment, callback) => {
  console.log("capture process")
  let id = payment.order_id
  let amount = payment.lines.reduce(reducer,0)

}