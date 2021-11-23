import React, { useState } from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Col,
    Row,
    Progress
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

export const Asset = () => {

    return (
      <Card>
        <CardHeader>
          <CardTitle className="h4">Asset Allocation</CardTitle>
        </CardHeader>
        <CardBody>
          <Row style={{height:'100%'}}>
            <Col sm="12">
              <div className="asset-prog">
                {
                  series.map( (val, id) => 
                    <div key={id} className="prog">
                      <p className="asset-name"> <img src="assets/img/FTM-logo.png"/> { options['labels'][id] } </p>
                      <Progress color="warning" value={val}></Progress>
                      <span className="series"> {val} % </span>
                    </div>
                )}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

    )



}