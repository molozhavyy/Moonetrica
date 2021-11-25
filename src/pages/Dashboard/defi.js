import React, { useState } from "react"
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

import { DefiPool } from "../../components/Dashboard/DefiPool"

export const Defi = props => {
  const [curCol, setCurCol] = useState(null)
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h4">{props.info.name.en}</CardTitle>
      </CardHeader>
      <CardBody style={{ overflow: "auto" }}>
        <div className="accordion" id="defi">
          <div className="accordion-item">
            <Row className="table-header">
              <Col xs="4"> Pool </Col>
              <Col xs="4" className="balance">
                {" "}
                Balances{" "}
              </Col>
              <Col xs="2"> Rewards </Col>
              {/* <Col xs="2"> APR </Col> */}
              <Col xs="2"> Value </Col>
            </Row>
          </div>
          {props.info.portfolio_list.map(function (val, id) {
            return (
              <DefiPool
                key={id}
                pool={val}
                curCol={curCol}
                selfCol={id}
                setCurCol={setCurCol}
              />
            )
          })}
        </div>
      </CardBody>
    </Card>
  )
}

Defi.propTypes = {
  info: PropTypes.object,
}
