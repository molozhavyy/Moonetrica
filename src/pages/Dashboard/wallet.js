import React, { useState } from "react"
// import { BigNumber } from "ethers"
import PropTypes from "prop-types"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
  Collapse,
} from "reactstrap"

import { WalletAsset } from "../../components/Dashboard/WalletAsset"
import { postJwtForgetPwd } from "helpers/fakebackend_helper"

export const Wallet = props => {
  const [curCol, setCurCol] = useState(null)
  let wallet_list = ["wmatic", "matic", "quick", "titan"]
  let assetsPrice = 0
  props.info.forEach(element => {
    assetsPrice +=
      element.price *
      Number((element.balance / Math.pow(10, element.decimals)).toFixed(4))
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="d-response">
            <span> Wallet </span>
            <input
              className="hide-check"
              type="checkbox"
              value=""
              id="defaultCheck1"
              title="Hide small balances"
            />
            <span className="check-label">Hide small balances</span>
            <span className="table-header" style={{ float: "right" }}>
              {" "}
              Assets{" "}
              <span
                style={{
                  color: "#FFC519",
                  fontSize: "16px",
                  fontWeight: "700",
                  marginLeft: "5px",
                }}
              >
                {" "}
                ${assetsPrice.toFixed(3)}{" "}
              </span>{" "}
            </span>
          </p>
          <p className="m-response">
            <input
              className="hide-check"
              type="checkbox"
              value=""
              id="defaultCheck1"
              title="Hide small balances"
            />
            <span className="check-label">Hide small balances</span>
          </p>
        </CardTitle>
      </CardHeader>
      <CardBody style={{ overflow: "auto" }}>
        <div className="accordion" id="walletScan">
          <div className="accordion-item">
            <Row className="table-header">
              <Col xl="6" xs="3">
                {" "}
                Assets{" "}
              </Col>
              <Col xl="2" xs="3">
                {" "}
                Balances{" "}
              </Col>
              <Col xl="2" xs="3">
                {" "}
                Price{" "}
              </Col>
              <Col xl="2" xs="3">
                {" "}
                Value{" "}
              </Col>
            </Row>
          </div>
          {props.info.map(function (val, id) {
            if (
              val.price > 0 &&
              val.balance > 0 &&
              (val.chain == "eth" || val.chain == "bsc" || val.chain == "matic")
            ) {
              return (
                <WalletAsset
                  key={id}
                  wallet={val}
                  curCol={curCol}
                  selfCol={id}
                  setCurCol={setCurCol}
                >
                  {" "}
                </WalletAsset>
              )
            }
          })}
        </div>
      </CardBody>
    </Card>
  )
}

Wallet.propTypes = {
  info: PropTypes.array,
}
