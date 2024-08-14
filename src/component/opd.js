import React from "react";
import { useLocation } from 'react-router-dom';
const OPD=()=>{
  const location = useLocation();
  const patientData = location.state?.patientData || {};
  const { firstName, lastName, age, gender, contactNo, address, city, service, serviceType } = patientData;
    return(
 <div>
<div style={{marginLeft:'30px'}}>
      <h2 style={{ textAlign: 'center' }}>OPD Patient Profile</h2>
      <h6 style={{ fontWeight: 'lighter', textAlign: 'center' }}>(opd paitent visit in hospital through the counter.)</h6>
<br/>
      <table border="1" style={{ width: '97%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead style={{ borderBottom: '1px solid black' }}>
          <tr>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Serial Number</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Name</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Contact Number</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Service</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Service Type</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
      </div>
 </div>
    );

};
export default OPD;