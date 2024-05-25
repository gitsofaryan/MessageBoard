import React, { useRef, useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import PluralitySocialConnect from 'plurality-social-connect';

const PluralityConnect = ({ onMetaMaskAccount }) => {
    const childRef = useRef(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const handleProfileDataReturned = (event) => {
            const data = event.detail;
            console.log("Get profile data:", data);
            alert(JSON.stringify(data));
            childRef.current.closeSocialConnectPopup();
        };

        const pluralityElement = childRef.current;
        if (pluralityElement) {
            pluralityElement.addEventListener('profileDataReturned', handleProfileDataReturned);
        }

        return () => {
            if (pluralityElement) {
                pluralityElement.removeEventListener('profileDataReturned', handleProfileDataReturned);
            }
        };
    }, []);

    useEffect(() => {
        const connectMetaMask = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                try {
                    const accounts = await provider.request({ method: 'eth_requestAccounts' });
                    setAccount(accounts[0]);
                    onMetaMaskAccount(accounts[0]);
                    console.log('MetaMask is connected:', accounts[0]);
                } catch (error) {
                    console.error('User rejected the request:', error);
                }
            } else {
                console.error('Please install MetaMask!');
            }
        };

        connectMetaMask();
    }, [onMetaMaskAccount]);

    return (
        <div ref={childRef}>
            <PluralitySocialConnect
                options={{ apps: 'facebook,twitter' }}
            />
        </div>
    );
};

export default PluralityConnect;
