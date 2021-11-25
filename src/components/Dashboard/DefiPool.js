import { Portfolio } from "pages/Dashboard/portfolio"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Col, Row, Collapse } from "reactstrap"

export const DefiPool = props => {
  const { pool, curCol, selfCol, setCurCol } = props
  const changeState = () => {
    if (curCol == selfCol) setCurCol(null)
    else setCurCol(selfCol)
  }

  let poolName = ""
  let poolBalances = ""
  let rewardBalances = ""
  let underlyingAssets = []
  let underlyingAssetsTotalValue = 0
  let rewards = []
  let rewardsTotalValue = 0

  pool.detail.supply_token_list.forEach(supply_token => {
    if (poolName == "") {
      poolName = supply_token.symbol
    } else {
      poolName = poolName + " + " + supply_token.symbol
    }

    if (poolBalances == "") {
      poolBalances = supply_token.amount.toFixed(2) + " " + supply_token.symbol
    } else {
      poolBalances =
        poolBalances +
        " + " +
        supply_token.amount.toFixed(2) +
        " " +
        supply_token.symbol
    }

    underlyingAssets.push({
      logo_url: supply_token.logo_url,
      symbol: supply_token.symbol,
      price: supply_token.price,
      balance: supply_token.amount,
      value: supply_token.price * supply_token.amount,
    })

    underlyingAssetsTotalValue += supply_token.price * supply_token.amount
  })

  pool.detail.reward_token_list.forEach(reward_token => {
    if (poolBalances == "") {
      rewardBalances =
        reward_token.amount.toFixed(2) + " " + reward_token.symbol
    } else {
      rewardBalances =
        rewardBalances +
        " + " +
        reward_token.amount.toFixed(2) +
        " " +
        reward_token.symbol
    }

    rewards.push({
      logo_url: reward_token.logo_url,
      symbol: reward_token.symbol,
      price: reward_token.price,
      balance: reward_token.amount,
      value: reward_token.price * reward_token.amount,
    })

    rewardsTotalValue += reward_token.price * reward_token.amount
  })

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={changeState}
        style={{ cursor: "pointer" }}
      >
        <Row>
          <Col
            xs="4"
            style={{
              textTransform: "uppercase",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{ width: "39px", alignItems: "center", display: "flex" }}
            >
              {underlyingAssets.map(function (underlyingAsset, id) {
                if (id == 0) {
                  return (
                    <div style={{ left: 0 }}>
                      <img
                        src={underlyingAsset.logo_url}
                        alt
                        style={{ width: 20, height: 20 }}
                      />
                    </div>
                  )
                } else {
                  return (
                    <div style={{ marginLeft: "-13px" }}>
                      <img
                        src={underlyingAsset.logo_url}
                        alt
                        style={{ width: 20, height: 20 }}
                      />
                    </div>
                  )
                }
              })}
            </div>
            <div>{poolName}</div>
          </Col>
          <Col xs="4" className="balance">
            <p className="m-0">{poolBalances}</p>
            <p className="symbol">
              $ {Number(underlyingAssetsTotalValue).toFixed(2)}
            </p>
          </Col>
          <Col xs="2">
            <p className="m-0">{rewardBalances}</p>
            <p className="symbol">$ {Number(rewardsTotalValue).toFixed(2)}</p>
            {/* <p className="symbol">$3423(1=$0.057)</p> */}
          </Col>
          {/* <Col xs="2">
            <p className="m-0">788.14%</p>
            <p className="symbol">2.16% daily</p>
          </Col> */}
          <Col xs="2">
            $ {pool.stats.asset_usd_value.toFixed(2)}
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
          <p className="detail-title"> Underlying Assets </p>
          <Row className="table-header">
            <Col xs="3"> Asset </Col>
            <Col xs="3"> Price </Col>
            <Col xs="3"> Balance </Col>
            {/* <Col xs="3"> 24h changes </Col> */}
            <Col xs="3"> Value </Col>
          </Row>
          {underlyingAssets.map((underlyingAsset, id) => (
            <Row className="table-row" key={id}>
              <Col xs="3">
                {" "}
                <img
                  src={underlyingAsset.logo_url}
                  width="20px"
                  height="20px"
                />{" "}
                {underlyingAsset.symbol}{" "}
              </Col>
              <Col xs="3"> $ {underlyingAsset.price} </Col>
              <Col xs="3"> {underlyingAsset.balance.toFixed(4)} </Col>
              {/* <Col xs="3" className="plus change">
                {" "}
                +1.5%($2018.545){" "}
              </Col> */}
              <Col xs="3"> $ {underlyingAsset.value.toFixed(4)} </Col>
            </Row>
          ))}
          <Row className="table-row total-sum">
            <Col xs="3">
              {" "}
              <span style={{ fontWeight: "900" }}> TOTAL </span>{" "}
            </Col>
            <Col xs="3"></Col>
            <Col xs="3"></Col>
            <Col xs="3"> $ {underlyingAssetsTotalValue.toFixed(4)} </Col>
          </Row>
          <p className="detail-title"> Rewards </p>
          <Row className="table-header">
            <Col xs="2"> Asset </Col>
            <Col xs="2"> Price </Col>
            <Col xs="2"> Balance </Col>
            {/* <Col xs="3"> 24h changes </Col> */}
            <Col xs="3"> Value </Col>
          </Row>
          {rewards.map((reward, id) => (
            <Row className="table-row" key={id}>
              <Col xs="3">
                {" "}
                <img src={reward.logo_url} width="20px" height="20px" />{" "}
                {reward.symbol}{" "}
              </Col>
              <Col xs="3"> $ {reward.price} </Col>
              <Col xs="3"> {reward.balance.toFixed(4)} </Col>
              {/* <Col xs="3" className="plus change">
            {" "}
            +1.5%($2018.545){" "}
          </Col> */}
              <Col xs="3"> $ {reward.value.toFixed(4)} </Col>
            </Row>
          ))}

          <Row className="table-row total-sum">
            <Col xs="3"> TOTAL </Col>
            <Col xs="3"></Col>
            <Col xs="3"></Col>
            <Col xs="3"> $ {rewardsTotalValue.toFixed(4)} </Col>
          </Row>
        </div>
      </Collapse>
    </div>
  )
}

DefiPool.propTypes = {
  pool: PropTypes.object,
  curCol: PropTypes.number,
  selfCol: PropTypes.number,
  setCurCol: PropTypes.func,
}
