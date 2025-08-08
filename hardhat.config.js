require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
module.exports = { solidity: { compilers: [ { version: '0.8.23' }, { version: '0.8.21' } ] }, networks: { hardhat: {} }, paths: { sources: './contracts', tests: './test', cache: './cache', artifacts: './artifacts' } };
