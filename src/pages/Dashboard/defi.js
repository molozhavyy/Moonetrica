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

import { DefiPool } from "../../components/Dashboard/DefiPool"

export const Defi = () => {

    const [curCol, setCurCol] = useState(null)
    let pool_list = ['wmatic + omen', 'omen'];

    return (
      <Card>
        <CardHeader>
          <CardTitle className="h4">DEFI platform name</CardTitle>
        </CardHeader>
        <CardBody style={{overflow:'auto'}}>
          <div className="accordion" id="defi">
            <div className="accordion-item">
              <Row className="table-header">
                <Col xs="3"> Pool </Col>
                <Col xs="3" className="balance">  Balances </Col>
                <Col xs="2"> Rewards </Col>
                <Col xs="2"> APR </Col>
                <Col xs="2"> Value </Col>
              </Row>
            </div>

            {
              pool_list.map( (val, id) =>
              <DefiPool key={id} pool={val} curCol={curCol} selfCol={id} setCurCol={setCurCol}> </DefiPool> )
            }

          </div>
        </CardBody>
      </Card>
    )


}