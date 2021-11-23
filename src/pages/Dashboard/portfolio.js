import React, { useState } from "react"
import ReactApexChart from "react-apexcharts"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
} from "reactstrap"

const series = [20, 21, 12, 20, 13, 14, 20, 21, 12, 20, 13, 14]
const options = {
  labels: ["OMEN", "WMATIC", "MATIC", "QUICK", "TITAN", "Others", "OMEN", "WMATIC", "MATIC", "QUICK", "TITAN", "Others"],
  colors: ["#2697ff", "#ff9515", "#f5cc3c", "#bc38f7", "#3cf5bc", "#ff7ecb", "#2697ff", "#ff9515", "#f5cc3c", "#bc38f7", "#3cf5bc", "#ff7ecb"],
  chart: {
    width: 300,
    height: 300,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
        height: 200,
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false,
    position: 'right',
    offsetY: 0,
    height: 230,
  },
}


export const Portfolio = () => {
    return (
        <Card>
          <CardHeader>
            <CardTitle className="h4">Portfolio Exposure</CardTitle>
          </CardHeader>
          <CardBody>
            <Row style={{height:'100%'}}>
              <Col sm={12} md={12} lg={7}>
                <ReactApexChart options={options} series={series} type="donut" height="300px" />
              </Col>
              <Col sm={12} md={12} lg={5}>
                <div className="chart-legend">
                  {
                    series.map( (val, id) => 
                    <p key={id}>
                        <img src="assets/img/FTM-logo.png" width="20px" height="20px" />
                        { options['labels'][id] }
                        <span className="dot" style={{ backgroundColor:options['colors'][id] }}></span>
                        <span className="series"> {val} % </span>
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
    )
}

// export default Portfolio;