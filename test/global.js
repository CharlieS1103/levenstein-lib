const Levenstein = require('../src/levenstein.js');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


exports.levenstein = new Levenstein();
exports.expect = chai.expect;