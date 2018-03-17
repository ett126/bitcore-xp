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
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
