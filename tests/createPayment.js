'use strict';

const cybersourceRestApi = require('cybersource-rest-client');
const configuration = require('../src/configuration.js')
const PaymentRequest = require('')
/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processPayment(request) {
  try {
    console.log('\n*************** Process Payment ********************* ');
    instance.createPayment(request, function (error, data, response) {
      if (error) {
        console.log('\nError in process a payment : ' + JSON.stringify(error));
      }
      else if (data) {
        console.log('\nData of process a payment : ' + JSON.stringify(data));
      }
      console.log('\nResponse of process a payment : ' + JSON.stringify(response));
      console.log('\nResponse Code of process a payment : ' + JSON.stringify(response['status']));
      callback(error, data);
    });
  } catch (error) {
    console.log(error);
  }
}
if (require.main === module) {
  processPayment(function () {
    console.log('\nProcessPayment end.');
  }, false);
}
module.exports.processPayment = processPayment;