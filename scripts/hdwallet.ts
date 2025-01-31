

import * as ethers from 'ethers';
import * as readline from 'readline';

async function createWallet() {
    const wallet = ethers.Wallet.createRandom();

    console.log('Mnemonic: ', wallet.mnemonic?.phrase);
}

async function loadWalletFromMnemonic() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter your mnemonic phrase: ', (mnemonicStr) => {
        try {
            const mnemonic = ethers.Mnemonic.fromPhrase(mnemonicStr);
            const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
            console.log(wallet);
        } catch (error) {
            console.error('Invalid mnemonic phrase');
        } finally {
            rl.close();
        }
    });
}

createWallet();
loadWalletFromMnemonic();