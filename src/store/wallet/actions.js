import {
    WALLET_CONNECT,
    WALLET_DISCONNECT,
    CONNECT_SUCCESS,
    DISCONNECT_SUCCESS
} from "./actionTypes";

export const connectSuccess = (addr) => ({
    type: CONNECT_SUCCESS,
    data: addr,
});

export const disconnectSuccess = (addr) => ({
    type: DISCONNECT_SUCCESS,
    data: addr,
});

export const walletDisconnect = () => ({
    type: WALLET_DISCONNECT,
});

export const walletConnect = () => ({
    type: WALLET_CONNECT,
});

