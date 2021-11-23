import {
    WALLET_CONNECT,
    WALLET_DISCONNECT,
    CONNECT_SUCCESS,
    DISCONNECT_SUCCESS
} from "./actionTypes";

const INIT_STATE = {
    walletAddress: ''
};

const Wallet = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CONNECT_SUCCESS:
            return { walletAddress: action.data }
        case DISCONNECT_SUCCESS:
            return { walletAddress: action.data }
        case WALLET_DISCONNECT:
            return { ...state };
        case WALLET_CONNECT:
            return { ...state };
        default:
            return { ...state };
    }
}


export default Wallet;