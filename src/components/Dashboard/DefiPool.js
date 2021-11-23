import PropTypes from "prop-types"
import React, { useState } from "react"
import {
    Col,
    Row,
    Collapse
  } from "reactstrap"


export const DefiPool = (props) => {

    const { pool, curCol, selfCol, setCurCol } = props
    const changeState = () => {
      if(curCol == selfCol)
        setCurCol(null)
      else
        setCurCol(selfCol)
    }
    
    return (
      <div className="accordion-item">
        <div className="accordion-header" onClick={ changeState } style={{ cursor: "pointer" }}>
          <Row>
            <Col xs="3" style={{textTransform:'uppercase'}}> <img src="assets/img/FTM-logo.png" width="20px" height="20px" /> {pool} </Col>
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
              <span className= { curCol == selfCol? 'drop-btn':'drop-btn active'} style={{ cursor: "pointer" }}> <i className="bx bx-caret-up"></i> </span> 
            </Col>
          </Row>
        </div>
        <Collapse isOpen={curCol == selfCol} className="accordion-collapse">
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
    )

}

DefiPool.propTypes = {
    pool: PropTypes.string,
    curCol: PropTypes.number,
    selfCol: PropTypes.number,
    setCurCol: PropTypes.func
}