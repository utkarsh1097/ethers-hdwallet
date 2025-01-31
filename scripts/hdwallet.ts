

import * as ethers from 'ethers';
import * as read from 'read';

async function createWallet() {
    const wallet = ethers.Wallet.createRandom();

    console.log('Mnemonic: ', wallet.mnemonic?.phrase);
}

async function loadWalletFromMnemonic() {
    const mnemonicStr = await read.read({ prompt: 'Enter mnemonic phrase: ', silent: true });
        try {
            const mnemonic = ethers.Mnemonic.fromPhrase(mnemonicStr);
            const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
            console.log(wallet);
        } catch (error) {
            console.error('Invalid mnemonic phrase');
        }

}

// createWallet();
loadWalletFromMnemonic();