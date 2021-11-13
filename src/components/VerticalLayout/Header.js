import PropTypes from 'prop-types'
import React, { useState } from "react"

import "../../assets/scss/custom/components/_header.scss";

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import { Link } from "react-router-dom"

// Reactstrap
import logo from "../../assets/images/logo.svg"
import logoLightSvg from "../../assets/images/logo-light.svg"
import { wallet } from 'common/data';

const Header = (props) => {

  const { walletAddress, setWalletAddress } = props
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const [position, setPosition] = useState();
  const [open, setOpen] = useState(false);
  // const walletAddress = "";

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  return (
      <header id="page-topbar">
        <div className="header-body">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-light" style={{textAlign:'left'}}>
              <span className="logo-sm">
                <img src="assets/img/logo.svg" width="160px" height="16px" />
              </span>
              <span className="logo-lg">
                <img src="assets/img/logo.svg" width="160px" height="16px" />
              </span>
            </Link>
          </div>
          {
            walletAddress ?
            <React.Fragment>
              <p className="stats-item">
                <span className="title">APR daily/yearly: </span>
                <span className="value">{"7.15/788.14%"}</span>
              </p>
              <p className="stats-item">
                <span className="title">Prediction Profit daily/yearly: </span>
                <span className="value"> {"1.911/11.931"} </span>
              </p>
              <p className="wallet-addr">
                <span style={{color:'#FFF', fontSize:'16px'}}> <i className="bx bx-wallet"></i> </span> 
                { walletAddress.slice(0, 12) }...
              </p>
              <span style={{color:'#FFF', cursor:'pointer', fontSize:'20px'}} onClick={e => setWalletAddress("")}>
                <i className="mdi mdi-logout"></i>
              </span>
            </React.Fragment>
            :
            <React.Fragment>
              <p id="connectBtn" onClick={e => setWalletAddress("0x87FBF0079d5Bb9Ea8FBF3805111FeEFF1Dd696Fc")}>
                Connect wallet
              </p>
            </React.Fragment>
          }
        </div>    
      </header>
  )
}

Header.propTypes = {
  walletAddress: PropTypes.string,
  setWalletAddress: PropTypes.func,
}

export default Header;
