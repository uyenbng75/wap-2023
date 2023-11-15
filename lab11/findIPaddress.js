/*
 * Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. 
(Search and learn 'dns' module, resolve4) - For this exercise, you need to look up Node.js API by yourself
 */

const dns = require('dns');

dns.resolve4('www.miu.edu', (err,address) => console.log('address: ', address));