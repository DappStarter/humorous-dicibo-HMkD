require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain minor gloom enrich orange giggle'; 
let testAccounts = [
"0x8deb5a80cbf1fdb9c1fdf08ab5318165cf7834d0d641cd37ae08b53e98662841",
"0x63c2798929ae89e187fc877070df03b3d056a30a5a8a1faf5f3e1b0539167460",
"0x0f91f790296309ff726d831f2992ecba0165874b46424209a67662b2bf653b90",
"0x3497f8bfbedc85ba2ae794a105261923345a0ba92f6227d31ef3d2f551ab070c",
"0x4ece550f6f79d46c28d218c12b08eddeee4da68927c850fe6f3bb8436370323f",
"0x85873ab1a794aed8e27eb86178b1198caf8f8d76958798655c2de46a9e7fba64",
"0xacf524ff83a1f78c888ddc405ebc6f1cf197d5f8cdf7c89dec356de9a82a4899",
"0xbb436bec8a78dc2dedd1ff9d5ea1215534fd2110283d5c4c1ffa3df7b6951ddd",
"0xa9fbd22eb61914ada0b677de7af05fb6c45bcd3ae9da960e95f522348bd348da",
"0x47ddf02885fff807e50b66ecca566e2122775b30f8042522e56547beae64331f"
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

