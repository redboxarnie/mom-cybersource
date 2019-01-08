'use strict';
var validateCmd = require('validate.js');
var refundCmd = require('refund.js');
var cancelCmd = require('cancel.js');
var captureCmd = require('capture.js');
var postBack = request('servicebusPoster.js');

exports.handler = (event, context, callback) => {

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body:  err ? err.message : JSON.stringify({
            "jsonrpc": "2.0",
            "id": 30,
            "result": res
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })


    if (typeof event.body == 'string') {
        event.body = JSON.parse(event.body)
    }

    switch (event.httpMethod) {
        // Table name and key are in payload
        case 'POST':
            var method = event.body['method'];
            console.log("=== SERVICE BUS METHOD ==");
            console.log(method);
            switch (method) {
                case 'magento.payments.payments_management.validate':
                    validateCmd.process(event.body.params.payment,postBack.process);
                    done(null,{})
                    break;
                case 'magento.payments.payments_management.capture':
                    captureCmd.process(event.body.params.payment,postBack.process);
                    done(null,{})
                    break;
              case 'magento.payments.payments_management.cancel':
                captureCmd.process(event.body.params.payment,postBack.process);
                done(null,{})
                break;
              case 'magento.payments.payments_management.refund':
                refundCmd.process(event.body.params.payment,postBack.process);
                done(null,{})
                break;

            }

            done(null,{})
            break;
        // Table name and key are in payload
        case 'OPTIONS':
            callback(null, {
                statusCode: '200',
                body: '',
                headers: {
                    'X-Magento-Service-Bus': '*',
                    'x-magento-service-bus':'*'
                }
            });
            break
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`))
    }
}