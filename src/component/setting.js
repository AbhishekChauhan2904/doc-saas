import React from "react";
const Setting = () =>{
return(
<div>
    <h2 style={{textAlign:'center'}}>Setting</h2>
    <h6 style={{ fontWeight: 'lighter', textAlign: 'center' }}>(Setting change on the Doctor portal or update request on the Doctor profile.)</h6>
    <hr style={{marginTop:'40px',marginBottom:'20px'}}/>
        <h2 style={{textAlign:'center'}}>Performance</h2>
        <label style={{marginLeft:'60px',marginTop:'20px'}}>
          Patient flow (Daily Visit):
          <input type="number" name="dailyVisit" style={{marginLeft:'10px'}} />
        </label>
        <label style={{marginLeft:'20px'}}>
          Total visit:
          <input type="number" name="totalVisit" style={{marginLeft:'10px'}} />
        </label>
        <label style={{marginLeft:'20px'}}>
          Cure Ratio:
          <input type="number" name="cureRatio" step="0.01" style={{marginLeft:'10px'}} />
        </label>
        <br/>
        <label style={{marginTop:'30px', marginLeft:'60px'}}>
          City Patient (%):
          <input type="number" name="cityPatient" style={{marginLeft:'10px'}} />
        </label>
        <label style={{marginLeft:'20px'}}>
          Outside Patient (%):
          <input type="number" name="outsidePatient" style={{marginLeft:'10px'}}/>
        </label>
        <label style={{marginLeft:'20px'}}>
          General Surgery:
          <input type="number" name="generalSurgery" style={{marginLeft:'10px'}} />
        </label>
        <br/>
        <label style={{marginLeft:"60px",marginTop:'30px',marginBottom:'20px'}} >
          Critical Surgery:
          <input type="number" name="criticalSurgery" style={{marginLeft:'10px'}}  />
        </label>
        <hr style={{marginTop:'20px',marginBottom:'20px'}}/>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={{ backgroundColor: 'rgb(133, 151, 231)', color: 'white', border: 'none', height: '40px', width: '100px', marginBottom:'20px' }}>Submit</button>
        </div>
</div>
);
};
export default Setting;