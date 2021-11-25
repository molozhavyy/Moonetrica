import React, { useState } from "react"
import ReactApexChart from "react-apexcharts"
import { Card, CardHeader, CardBody, CardTitle, Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import unkownLogo from "../../assets/images/tokens/unknown.svg"

export const Portfolio = props => {
  const generateRandomColor = () => {
    let color = "#"
    let letters = "0123456789ABCDEF"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  let labels = []
  let series = []
  let colors = []

  props.info.forEach(element => {
    if (
      element.price > 0 &&
      element.balance > 0 &&
      (element.chain == "eth" ||
        element.chain == "bsc" ||
        element.chain == "matic")
    ) {
      series.push({
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
      colors.push(generateRandomColor())
      labels.push(element.symbol)
    }
  })

  const options = {
    labels: labels,
    colors: colors,
    chart: {
      width: 300,
      height: 300,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      show: false,
      position: "right",
      offsetY: 0,
      height: 230,
    },
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h4">Portfolio Exposure</CardTitle>
      </CardHeader>
      <CardBody>
        <Row style={{ height: "100%" }}>
          <Col sm={12} md={12} lg={7}>
            <ReactApexChart
              options={options}
              series={series.map(function (x) {
                return x.value
              })}
              type="donut"
              height="300px"
            />
          </Col>
          <Col sm={12} md={12} lg={5}>
            <div className="chart-legend">
              {series.map((val, id) => (
                <p key={id}>
                  <img src={val.logo} width="20px" height="20px" />
                  {options["labels"][id]}
                  <span
                    className="dot"
                    style={{ backgroundColor: options["colors"][id] }}
                  ></span>
                  <span className="series"> $ {val.value} </span>
                </p>
              ))}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

Portfolio.propTypes = {
  info: PropTypes.array,
}
