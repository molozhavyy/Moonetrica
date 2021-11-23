import React, { useState } from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Col,
    Row,
    Collapse
  } from "reactstrap"

import { WalletAsset } from "../../components/Dashboard/WalletAsset"

export const Wallet = () => {

    const [curCol, setCurCol] = useState(null)
    let wallet_list = ['wmatic', 'matic', 'quick', 'titan'];
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <p className="d-response">
              <span> Wallet </span>
              <input className="hide-check" type="checkbox" value="" id="defaultCheck1" title="Hide small balances" />
              <span className="check-label">Hide small balances</span>
              <span className="table-header" style={{float:'right'}}> Assets <span style={{color:'#FFC519', fontSize:'16px', fontWeight:'700', marginLeft:'5px'}}> $5.066 </span> </span>
            </p>
            <p className="m-response">
              <input className="hide-check" type="checkbox" value="" id="defaultCheck1" title="Hide small balances" />
              <span className="check-label">Hide small balances</span>
            </p>
          </CardTitle>
        </CardHeader>
        <CardBody style={{overflow:'auto'}}>
          <div className="accordion" id="walletScan">
            <div className="accordion-item">
              <Row className="table-header">
                <Col lx="3"> Assets </Col>
                <Col lx="3"> Balances </Col>
                <Col lx="3"> Price </Col>
                <Col lx="3"> Value </Col>
              </Row>
            </div>
            {
              wallet_list.map( (val, id) =>
              <WalletAsset key={id} wallet={val} curCol={curCol} selfCol={id} setCurCol={setCurCol}> </WalletAsset> )
            }
          </div>
        </CardBody>
      </Card>
    )

}