'use strict';

/*
* Merchant configuration properties are taken from Configuration module
*/
// Constructor for Configuration
function Configuration() {

  let configObj = {
    'authenticationType': process.env.AuthenticationType,
    'runEnvironment': process.env.RunEnvironment,

    'merchantID': process.env.MerchantId,
    'merchantKeyId': process.env.MerchantKeyId,
    'merchantsecretKey': process.env.MerchantSecretKey,

    'keyAlias': process.env.KeyAlias,
    'keyPass': process.env.KeyPass,
    'keyFileName': process.env.KeyFileName,
    'keysDirectory': process.env.KeysDirectory,

  };
  return configObj;

}

module.exports = Configuration;