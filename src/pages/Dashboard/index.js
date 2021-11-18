// import React, { Component } from "react"
import React, { useState } from "react"
import PropTypes from 'prop-types'
import ReactApexChart from "react-apexcharts"
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Table,
  Progress,
} from "reactstrap"
import classnames from "classnames"
import "../../assets/scss/custom/pages/_dashboard.scss";



const Dashboard = (props) => {

  const {walletAddress} = props;
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const [col1, setcol1] = useState(false)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)
  const [col4, setcol4] = useState(false)
  const [col5, setcol5] = useState(false)


  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab)
    }
  }

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

  const t_col1 = () => {
    setcol1(!col1)
    setcol2(false)
    setcol3(false)
  }

  const t_col2 = () => {
    setcol2(!col2)
    setcol1(false)
    setcol3(false)
  }

  const t_col3 = () => {
    setcol3(!col3)
    setcol1(false)
    setcol2(false)
  }

  const t_col4 = () => {
    setcol4(!col4)
    setcol5(false)
  }

  const t_col5 = () => {
    setcol5(!col5)
    setcol4(false)
  }

  return (
    <React.Fragment>
      <div className="page-content dashboard">
        {
          walletAddress?
          <Container fluid>
            <Row>
              <Col sm={12} style={{paddingRight:'0', paddingLeft:'0'}}>
                <Nav tabs className="nav-tabs-custom">
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }}
                      className={classnames({ active: customActiveTab === "1"})} onClick={() => { toggleCustom("1") }} >
                      <img src="assets/img/all.svg" width="20px" height="20px" />
                      <span>All</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }}
                      className={classnames({ active: customActiveTab === "2"})} onClick={() => { toggleCustom("2") }} >
                      <img src="assets/img/ether.svg" width="20px" height="20px" />
                      <span>Etherum</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }}
                      className={classnames({ active: customActiveTab === "3"})} onClick={() => { toggleCustom("3") }} >
                      <img src="assets/img/polygon.svg" width="20px" height="20px" />
                      <span>Polygon</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={customActiveTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm={12} md={12} lg={6} className="statis-1">
                        <div className="mr-56 ">
                          <p className="statis-title">Net worth</p>
                          <p className="statis-detail" >$0 <span className="plus change"> + $0 </span> </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">To be claimed</p>
                          <p className="statis-detail" >$0 </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Total assets</p>
                          <p className="statis-detail" >$0 </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Total debts</p>
                          <p className="statis-detail" >$0</p>
                        </div>
                      </Col>
                      <Col sm={12} md={12} lg={6} className="statis-2">
                        <div className="mr-56 ">
                          <p className="statis-title">APR daily/yearly</p>
                          <p className="statis-detail" >7.15/788.14%</p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Prediction Profit daily/yearly</p>
                          <p className="statis-detail" >1.911/11.931</p>
                        </div>  
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12} md={12} lg={6}>
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
                      </Col>
                      <Col sm={12} md={12} lg={6}>
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
                                  {/* {
                                    series.map( (val, id) => 
                                      <div key={id} className="prog">
                                        <p style={{width:'20%', margin:'0'}}> <img src="assets/img/FTM-logo.png"/> { options['labels'][id] } </p>
                                        <Progress color="warning" value={val}></Progress>
                                        <span className="series"> {val} % </span>
                                      </div>
                                  )} */}
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col1} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col1? 'drop-btn':'drop-btn active'} onClick={t_col1} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col1} className="accordion-collapse">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col2} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col2? 'drop-btn':'drop-btn active'} onClick={t_col2} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>

                                <Collapse isOpen={col2} className="accordion-collapse">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col3} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col3? 'drop-btn':'drop-btn active'} onClick={t_col3} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col3} className="accordion-collapse">
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
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
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

                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col4} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col xs="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC + OMEN </Col>
                                    <Col xs="3" className="balance"> 
                                      <p className="m-0">2,109.5 WMATIC + 5,175.813 OMEN</p>
                                      <p className="symbol">$4547.66</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">7.735 OMEN</p>
                                      <p  className="symbol">$3423(1=$0.057)</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">788.14%</p>
                                      <p  className="symbol">2.16% daily</p>
                                    </Col>
                                    <Col xs="2">
                                      $4550.983
                                      <span className= {col4? 'drop-btn':'drop-btn active'} onClick={t_col4} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col4} className="accordion-collapse">
                                  <div className="accordion-body wallet-detail">
                                    <p className="detail-title"> Underlying Assets </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="minus change"> -1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum" >
                                      <Col xs="2"> <span style={{fontWeight:'900'}}> TOTAL </span> </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <p className="detail-title"> Rewards </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum">
                                      <Col xs="2"> TOTAL </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                  </div>
                                </Collapse>
                              </div>

                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col5} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col xs="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC + OMEN </Col>
                                    <Col xs="3" className="balance"> 
                                      <p className="m-0">2,109.5 WMATIC + 5,175.813 OMEN</p>
                                      <p className="symbol">$4547.66</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">7.735 OMEN</p>
                                      <p  className="symbol">$3423(1=$0.057)</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">788.14%</p>
                                      <p  className="symbol">2.16% daily</p>
                                    </Col>
                                    <Col xs="2">
                                      $4550.983
                                      <span className= {col5? 'drop-btn':'drop-btn active'} onClick={t_col5} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col5} className="accordion-collapse">
                                  <div className="accordion-body wallet-detail">
                                    <p className="detail-title"> Underlying Assets </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="minus change"> -1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum" >
                                      <Col xs="2"> <span style={{fontWeight:'900'}}> TOTAL </span> </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <p className="detail-title"> Rewards </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum">
                                      <Col xs="2"> TOTAL </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                  </div>
                                </Collapse>
                              </div>

                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm={12} md={12} lg={6} className="statis-1">
                        <div className="mr-56 ">
                          <p className="statis-title">Net worth</p>
                          <p className="statis-detail" >$0 <span className="plus change"> + $0 </span> </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">To be claimed</p>
                          <p className="statis-detail" >$0 </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Total assets</p>
                          <p className="statis-detail" >$0 </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Total debts</p>
                          <p className="statis-detail" >$0</p>
                        </div>
                      </Col>
                      <Col sm={12} md={12} lg={6} className="statis-2">
                        <div className="mr-56 ">
                          <p className="statis-title">APR daily/yearly</p>
                          <p className="statis-detail" >7.15/788.14%</p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Prediction Profit daily/yearly</p>
                          <p className="statis-detail" >1.911/11.931</p>
                        </div>  
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12} md={12} lg={6}>
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
                      </Col>
                      <Col sm={12} md={12} lg={6}>
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
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col1} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col1? 'drop-btn':'drop-btn active'} onClick={t_col1} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col1} className="accordion-collapse">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col2} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col2? 'drop-btn':'drop-btn active'} onClick={t_col2} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>

                                <Collapse isOpen={col2} className="accordion-collapse">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col3} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col3? 'drop-btn':'drop-btn active'} onClick={t_col3} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col3} className="accordion-collapse">
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
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
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

                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col4} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col xs="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC + OMEN </Col>
                                    <Col xs="3" className="balance"> 
                                      <p className="m-0">2,109.5 WMATIC + 5,175.813 OMEN</p>
                                      <p className="symbol">$4547.66</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">7.735 OMEN</p>
                                      <p  className="symbol">$3423(1=$0.057)</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">788.14%</p>
                                      <p  className="symbol">2.16% daily</p>
                                    </Col>
                                    <Col xs="2">
                                      $4550.983
                                      <span className= {col4? 'drop-btn':'drop-btn active'} onClick={t_col4} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col4} className="accordion-collapse">
                                  <div className="accordion-body wallet-detail">
                                    <p className="detail-title"> Underlying Assets </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="minus change"> -1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum" >
                                      <Col xs="2"> <span style={{fontWeight:'900'}}> TOTAL </span> </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <p className="detail-title"> Rewards </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum">
                                      <Col xs="2"> TOTAL </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                  </div>
                                </Collapse>
                              </div>

                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col5} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col xs="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC + OMEN </Col>
                                    <Col xs="3" className="balance"> 
                                      <p className="m-0">2,109.5 WMATIC + 5,175.813 OMEN</p>
                                      <p className="symbol">$4547.66</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">7.735 OMEN</p>
                                      <p  className="symbol">$3423(1=$0.057)</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">788.14%</p>
                                      <p  className="symbol">2.16% daily</p>
                                    </Col>
                                    <Col xs="2">
                                      $4550.983
                                      <span className= {col5? 'drop-btn':'drop-btn active'} onClick={t_col5} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col5} className="accordion-collapse">
                                  <div className="accordion-body wallet-detail">
                                    <p className="detail-title"> Underlying Assets </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="minus change"> -1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum" >
                                      <Col xs="2"> <span style={{fontWeight:'900'}}> TOTAL </span> </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <p className="detail-title"> Rewards </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum">
                                      <Col xs="2"> TOTAL </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                  </div>
                                </Collapse>
                              </div>

                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm={12} md={12} lg={6} className="statis-1">
                        <div className="mr-56 ">
                          <p className="statis-title">Net worth</p>
                          <p className="statis-detail" >$0 <span className="plus change"> + $0 </span> </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">To be claimed</p>
                          <p className="statis-detail" >$0 </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Total assets</p>
                          <p className="statis-detail" >$0 </p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Total debts</p>
                          <p className="statis-detail" >$0</p>
                        </div>
                      </Col>
                      <Col sm={12} md={12} lg={6} className="statis-2">
                        <div className="mr-56 ">
                          <p className="statis-title">APR daily/yearly</p>
                          <p className="statis-detail" >7.15/788.14%</p>
                        </div>
                        <div className="mr-56 ">
                          <p className="statis-title">Prediction Profit daily/yearly</p>
                          <p className="statis-detail" >1.911/11.931</p>
                        </div>  
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12} md={12} lg={6}>
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
                      </Col>
                      <Col sm={12} md={12} lg={6}>
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
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col1} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col1? 'drop-btn':'drop-btn active'} onClick={t_col1} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col1} className="accordion-collapse">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col2} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col2? 'drop-btn':'drop-btn active'} onClick={t_col2} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>

                                <Collapse isOpen={col2} className="accordion-collapse">
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
                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col3} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col lx="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                    <Col lx="3"> 1.931 </Col>
                                    <Col lx="3"> $1.07 </Col>
                                    <Col lx="3"> $2.066
                                      <span className= {col3? 'drop-btn':'drop-btn active'} onClick={t_col3} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col3} className="accordion-collapse">
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
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
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

                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col4} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col xs="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC + OMEN </Col>
                                    <Col xs="3" className="balance"> 
                                      <p className="m-0">2,109.5 WMATIC + 5,175.813 OMEN</p>
                                      <p className="symbol">$4547.66</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">7.735 OMEN</p>
                                      <p  className="symbol">$3423(1=$0.057)</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">788.14%</p>
                                      <p  className="symbol">2.16% daily</p>
                                    </Col>
                                    <Col xs="2">
                                      $4550.983
                                      <span className= {col4? 'drop-btn':'drop-btn active'} onClick={t_col4} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col4} className="accordion-collapse">
                                  <div className="accordion-body wallet-detail">
                                    <p className="detail-title"> Underlying Assets </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="minus change"> -1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum" >
                                      <Col xs="2"> <span style={{fontWeight:'900'}}> TOTAL </span> </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <p className="detail-title"> Rewards </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum">
                                      <Col xs="2"> TOTAL </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                  </div>
                                </Collapse>
                              </div>

                              <div className="accordion-item">
                                <div className="accordion-header" onClick={t_col5} style={{ cursor: "pointer" }}>
                                  <Row>
                                    <Col xs="3"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC + OMEN </Col>
                                    <Col xs="3" className="balance"> 
                                      <p className="m-0">2,109.5 WMATIC + 5,175.813 OMEN</p>
                                      <p className="symbol">$4547.66</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">7.735 OMEN</p>
                                      <p  className="symbol">$3423(1=$0.057)</p>
                                    </Col>
                                    <Col xs="2">
                                      <p className="m-0">788.14%</p>
                                      <p  className="symbol">2.16% daily</p>
                                    </Col>
                                    <Col xs="2">
                                      $4550.983
                                      <span className= {col5? 'drop-btn':'drop-btn active'} onClick={t_col5} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
                                    </Col>
                                  </Row>
                                </div>
                                <Collapse isOpen={col5} className="accordion-collapse">
                                  <div className="accordion-body wallet-detail">
                                    <p className="detail-title"> Underlying Assets </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="minus change"> -1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum" >
                                      <Col xs="2"> <span style={{fontWeight:'900'}}> TOTAL </span> </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <p className="detail-title"> Rewards </p>
                                    <Row className="table-header">
                                      <Col xs="2"> Asset </Col>
                                      <Col xs="2"> Price </Col>
                                      <Col xs="2"> Balance </Col>
                                      <Col xs="3"> 24h changes </Col>
                                      <Col xs="3"> Value </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row">
                                      <Col xs="2"> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> WMATIC </Col>
                                      <Col xs="2"> $0.17 </Col>
                                      <Col xs="2"> 2109.5 </Col>
                                      <Col xs="3" className="plus change"> +1.5%($2018.545) </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                    <Row className="table-row total-sum">
                                      <Col xs="2"> TOTAL </Col>
                                      <Col xs="2"></Col>
                                      <Col xs="2"></Col>
                                      <Col xs="3"> </Col>
                                      <Col xs="3"> $2257.164 </Col>
                                    </Row>
                                  </div>
                                </Collapse>
                              </div>

                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
          :
          <Container fluid>
            <Row>
              <Col sm="12" style={{paddingRight:'0', paddingLeft:'0'}}>
                <Nav tabs className="nav-tabs-custom">
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }}
                      className={classnames({ active: customActiveTab === "1"})} onClick={() => { toggleCustom("1") }} >
                      <img src="assets/img/all.svg" width="20px" height="20px" />
                      <span>All</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }}
                      className={classnames({ active: customActiveTab === "2"})} onClick={() => { toggleCustom("2") }} >
                      <img src="assets/img/ether.svg" width="20px" height="20px" />
                      <span>Etherum</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }}
                      className={classnames({ active: customActiveTab === "3"})} onClick={() => { toggleCustom("3") }} >
                      <img src="assets/img/polygon.svg" width="20px" height="20px" />
                      <span>Polygon</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <div className="banner">
                  <img src="assets/img/banner.svg" width="160px" height="160px" />
                  <p className="banner-title"> No data. Please connect your wallet </p>
                </div>

              </Col>
            </Row>
          </Container>
        }
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  walletAddress: PropTypes.string,
}

export default Dashboard;
