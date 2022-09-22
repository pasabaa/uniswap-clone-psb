import React, {useState, useEffect} from 'react';
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
import styles from '../styles';


const WalletButton = () => {
    const [accountAddres, setAccountAddres] = useState('');
    const {ens} = useLookupAddress();
    const {account, activateBrowserWallet, deactivate} = useEthers();

    useEffect(()=>{
        if (ens) {
            setAccountAddres(ens);
        } else if (account) {
            setAccountAddres(shortenAddress(account));
        } else {
            setAccountAddres('');
        }
    },[account, ens, setAccountAddres])


  return (
    <button 
    onClick={()=>{
        if (!account) {
            activateBrowserWallet();
        } else {
            deactivate();
        }
    }} 
    className={styles.walletButton}
    >
        {accountAddres || 'Connect Wallet'}

    </button>
  )
}

export default WalletButton