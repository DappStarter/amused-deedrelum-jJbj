require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rate night prosper include clock bubble surge'; 
let testAccounts = [
"0x37bfdc6447d5c70e7d3856306b597056f80c40cf2bfcaaf231a2261c928b595f",
"0x3040237b08f9d473436d9267f582e81d2472937dd82c52db3b88dff554a7bab5",
"0xcbd57c649036d9cb54fc71db918693f6d4581004ce86df5942c8a9a2f634a8d0",
"0x75162af5c5a82bae6eeb17134ca8a89e5084d39ad9cfb4d7bd554d5a02bbe3f4",
"0x390258f78bd315ba93dbbab42baea087290eec0a6cfe895ee4f70451fa3169e5",
"0xb61f98e95ed331e3c5f1ca23df194ccad9b54cbfe6f537a0595fbfe041ac629e",
"0xb999ec13d3a54e8068870efb624ed20c54b06056d6a1928b4319c0ef3fb092f9",
"0x86efc65740ffc5f0b516f0c5d6855f0b473a678fb6c40e775fa17ecf872cae4d",
"0xa289ba7bde9220fed3f2420ab61ab59411d39421da5b2e339642bc4d73c76c52",
"0x2a74a638c0d79bbc62e543ee62029943f4dd4ff03a4164ec8fadd0530a4bc5c2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

