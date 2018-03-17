var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e5e2f8b4'),
  addressVersion: 75,
  privKeyVersion: 203,
  P2SHVersion: 20,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('0000065A10945931644CDDA436D5AD0742D085E9DEE3E7FDD51B822626727E78'),
    merkle_root: hex('CC83C2272FA6B9D6FE6C322C9730BCAE47278195A2D64A9D2F796BFB41EEC001'),
    height: 0,
    nonce: 261097,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1472006328,
    bits: 504365055, // 1e0fffff
  },
  dnsSeeds: [
  ],
  defaultClientPort: 28192
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('c0efcdf2'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('0000E097477B585E7289F4C23C4FF639A8775E8F4D2C715586F160FFF8869278'),
    merkle_root: hex('CC83C2272FA6B9D6FE6C322C9730BCAE47278195A2D64A9D2F796BFB41EEC001'),
    height: 0,
    nonce: 175602,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1472006328,
    bits: 4245812455,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 17778
};
