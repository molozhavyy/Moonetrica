// import React, { Component } from "react"
import React, { useState } from "react"
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import {Portfolio} from './portfolio'
import {Asset} from './asset'
import {Wallet} from './wallet'
import {Defi} from './defi'

import classnames from "classnames"
import "../../assets/scss/custom/pages/_dashboard.scss";



const Dashboard = (props) => {

  const walletAddress = useSelector((state) => state.Wallet.walletAddress )
  const [customActiveTab, setcustomActiveTab] = useState(0);
  const tab_list = ['All', 'Ethereum', 'Smart Chain', 'Polygon']

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab)
    }
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
                {
                  tab_list.map( (val, id) =>
                    <NavItem key={id}>
                      <NavLink style={{ cursor: "pointer" }}
                        className={classnames({ active: customActiveTab === id})} onClick={() => { toggleCustom(id) }} >
                        <img src={"assets/img/tab"+id+".svg"} width="20px" height="20px" />
                        <span>{val}</span>
                      </NavLink>
                    </NavItem> 
                  )
                }
                </Nav>
                <TabContent activeTab={customActiveTab}>
                {
                  tab_list.map( (val, id) =>
                    <TabPane tabId={id} key={id}>
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
                          <Portfolio> </Portfolio>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                          <Asset> </Asset>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <Wallet> </Wallet>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <Defi> </Defi>
                        </Col>
                      </Row>
                    </TabPane>
                  )
                }
                </TabContent>
              </Col>
            </Row>
          </Container>
          :
          <Container fluid>
            <Row>
              <Col sm="12" style={{paddingRight:'0', paddingLeft:'0'}}>
              <Nav tabs className="nav-tabs-custom">
                {
                  tab_list.map( (val, id) =>
                    <NavItem key={id}>
                      <NavLink style={{ cursor: "pointer" }}
                        className={classnames({ active: customActiveTab === id})} onClick={() => { toggleCustom(id) }} >
                        <img src={"assets/img/tab"+id+".svg"} width="20px" height="20px" />
                        <span>{val}</span>
                      </NavLink>
                    </NavItem> 
                  )
                }
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
