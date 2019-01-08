// in globalSetup.js
process.env.AuthenticationType = 'http_signature';
process.env.RunEnvironment = 'cybersource.environment.SANDBOX';
process.env.MerchantId = 'testrest';

// http_signature parameters
process.env.MerchantKeyId = '08c94330-f618-42a3-b09d-e1e43be5efda';
process.env.MerchantSecretKey = 'yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=';

module.exports = async () => {
};