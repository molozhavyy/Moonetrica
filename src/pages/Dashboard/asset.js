import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
  Progress,
} from "reactstrap"
import PropTypes from "prop-types"
import unkownLogo from "../../assets/images/tokens/unknown.svg"

export const Asset = props => {
  let series = []
  let assetsPrice = 0
  props.info.forEach(element => {
    if (
      element.price > 0 &&
      element.balance > 0 &&
      (element.chain == "eth" ||
        element.chain == "bsc" ||
        element.chain == "matic")
    ) {
      assetsPrice += Number(
        (
          element.price *
          Number((element.balance / Math.pow(10, element.decimals)).toFixed(4))
        ).toFixed(3)
      )
      series.push({
        label: element.symbol,
        value: Number(
          (
            element.price *
            Number(
              (element.balance / Math.pow(10, element.decimals)).toFixed(4)
            )
          ).toFixed(3)
        ),
        logo: element.logo_url ? element.logo_url : unkownLogo,
      })
    }
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h4">Asset Allocation</CardTitle>
      </CardHeader>
      <CardBody>
        <Row style={{ height: "100%" }}>
          <Col sm="12">
            <div className="asset-prog">
              {series.map((val, id) => (
                <div key={id} className="prog">
                  <p className="asset-name">
                    {" "}
                    <img src={val.logo} /> {val.label}{" "}
                  </p>
                  <Progress
                    color="warning"
                    value={(100 * val.value) / assetsPrice}
                  ></Progress>
                  <span className="series">
                    {" "}
                    {((100 * val.value) / assetsPrice).toFixed(3)} %{" "}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

Asset.propTypes = {
  info: PropTypes.array,
}
