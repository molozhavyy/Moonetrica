import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { WALLET_CONNECT, WALLET_DISCONNECT, CONNECT_SUCCESS } from "./actionTypes";
import { walletConnect, walletDisconnect, connectSuccess, disconnectSuccess } from "./actions";
import {connectWallet, disConnectWallet} from "../../helpers/wallet_helper";


//Include Both Helper File with needed methods


function* getConnectWallet() {
    try {
        // const walletAddr = connectWallet();
        const walletAddr = yield call(connectWallet);
        yield put(connectSuccess(walletAddr));
    } catch (error) {

    }
}

function* DisconnectWallet() {
    try {
        const walletAddr = yield call(disConnectWallet);
        yield put(disconnectSuccess(walletAddr));
    } catch (error) {

    }
}

export function* watchConnectWallet() {
    yield takeEvery(WALLET_CONNECT, getConnectWallet);
    yield takeEvery(WALLET_DISCONNECT, DisconnectWallet);
}

function* walletSaga() {
    yield all([fork(watchConnectWallet)]);
}

export default walletSaga;
