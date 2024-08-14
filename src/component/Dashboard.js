import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Dashboard=()=>{
    return(
<div>
<h2 style={{textAlign:'center',fontWeight:'bold'}}>Dashboard</h2>
<hr/>
<Row>
<h3 style={{fontWeight:'200',marginLeft:'10px'}}>COUNTER</h3>
        <Col>
        
    <div style={{border:"2px solid green", width:'230px',height:'90px',marginTop:'40px' ,marginLeft:'10px'}}>
   
  <h4 style={{textAlign:'center',background:'rgb(176, 187, 236)',height:'40px'}}>NEW REGISTRATION</h4>
  <h4 style={{textAlign:'center'}}>14</h4>
    </div></Col>
    <Col>
    <div style={{border:"2px solid green", width:'230px',height:'90px',marginTop:'40px'}}>
  <h4 style={{textAlign:'center',background:'orange',height:'40px'}}>SURGERY</h4>
  <h4 style={{textAlign:'center'}}>15</h4>
    </div>
    </Col>
    <Col>
    <div style={{border:"2px solid green", width:'230px',height:'90px',marginTop:'40px'}}>
  <h4 style={{textAlign:'center',background:'yellow',height:'40px'}}>OPD</h4>
  <h4 style={{textAlign:'center'}}>29</h4>
    </div>
    </Col>
    </Row>
    <br/>
    <hr style={{marginTop:"40px"}}/>
    <Row>
<h3 style={{marginTop:"40px",fontWeight:'200',marginLeft:'10px'}}>ONLINE</h3>
        <Col>
        
    <div style={{border:"2px solid green", width:'230px',height:'90px',marginTop:'40px',marginLeft:'10px'}}>
   
  <h4 style={{textAlign:'center',background:'lightgreen',height:'40px'}}>ALL APPOINTMENT</h4>
  <h4 style={{textAlign:'center'}}>29</h4>
    </div></Col>
    <Col>
    <div style={{border:"2px solid green", width:'230px',height:'90px',marginTop:'40px'}}>
  <h4 style={{textAlign:'center',background:'lightpink',height:'40px'}}>SURGERY</h4>
  <h4 style={{textAlign:'center'}}>15</h4>
    </div>
    </Col>
    <Col>
    <div style={{border:"2px solid green", width:'230px',height:'90px',marginTop:'40px'}}>
  <h4 style={{textAlign:'center',background:'lightblue',height:'40px'}}>OPD</h4>
  <h4 style={{textAlign:'center'}}>14</h4>
    </div>
    </Col>
    </Row>
    <hr/> <hr/>
</div>
    );

}
export default Dashboard;