import React from "react";
const Surgery=()=>{
    return(
 <div>
<div style={{marginLeft:'30px'}}>
      <h2 style={{ textAlign: 'center' }}>Surgery Patient Profile</h2>
      <h6 style={{ fontWeight: 'lighter', textAlign: 'center' }}>(Surgery paitent visit in hospital through the counter.)</h6>
<br/>
      <table border="1" style={{ width: '97%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead style={{ borderBottom: '1px solid black' }}>
          <tr>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Serial Number</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Name</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center' , padding: '8px'}}>Contact Number</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Service</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center' , padding: '8px'}}>Service Type</th>
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
export default Surgery;