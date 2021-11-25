import PropTypes from "prop-types"
import React, { useState } from "react"
import { Col, Row, Collapse } from "reactstrap"
import unkownLogo from "../../assets/images/tokens/unknown.svg"

export const WalletAsset = props => {
  const { wallet, curCol, selfCol, setCurCol } = props

  const changeState = () => {
    if (curCol == selfCol) setCurCol(null)
    else setCurCol(selfCol)
  }

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={changeState}
        style={{ cursor: "pointer" }}
      >
        <Row>
          <Col xl="6" xs="3" style={{ textTransform: "uppercase" }}>
            {" "}
            {wallet.logo_url ? (
              <img src={wallet.logo_url} width="20px" height="20px" />
            ) : (
              <img src={unkownLogo} width="20px" height="20px" />
            )}{" "}
            {wallet.symbol}{" "}
          </Col>
          <Col xl="2" xs="3">
            {" "}
            {Number(
              (wallet.balance / Math.pow(10, wallet.decimals)).toFixed(4)
            )}{" "}
          </Col>
          <Col xl="2" xs="3">
            {" "}
            ${Number(wallet.price.toFixed(4))}{" "}
          </Col>
          <Col xl="2" xs="3">
            {" "}
            $
            {Number(
              (
                wallet.price *
                Number(
                  (wallet.balance / Math.pow(10, wallet.decimals)).toFixed(4)
                )
              ).toFixed(3)
            )}
            <span
              className={curCol == selfCol ? "drop-btn" : "drop-btn active"}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <i className="bx bx-caret-up"></i>{" "}
            </span>
          </Col>
        </Row>
      </div>
      <Collapse isOpen={curCol == selfCol} className="accordion-collapse">
        <div className="accordion-body wallet-detail">
          <p className="explorer">
            <span className="table-header">Explorer:</span>
            <span className="item">
              <img src="assets/img/FTM-logo.png" width="20px" height="20px" />
              PolygonScan
            </span>
            <span className="item">
              <img src="assets/img/FTM-logo.png" width="20px" height="20px" />
              MaticVigit
            </span>
          </p>
          <p className="trade">
            <span className="table-header">Trade:</span>
            <span className="item">
              <img src="assets/img/FTM-logo.png" width="20px" height="20px" />
              SushiSwap
            </span>
            <span className="item">
              <img src="assets/img/FTM-logo.png" width="20px" height="20px" />
              QuickSwap
            </span>
            <span className="item">
              <img src="assets/img/FTM-logo.png" width="20px" height="20px" />
              Dfyn
            </span>
          </p>
        </div>
      </Collapse>
    </div>
  )
}

WalletAsset.propTypes = {
  wallet: PropTypes.object,
  curCol: PropTypes.number,
  selfCol: PropTypes.number,
  setCurCol: PropTypes.func,
}
