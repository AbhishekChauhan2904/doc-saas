import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from "./header";

const CounterVisit = () => {
  const location = useLocation();
  const patientData = location.state?.patientData || {};
  const { firstName, lastName, age, gender, address, city, service, serviceType,contactNo } = patientData;

  const loadPatientsFromLocalStorage = () => {
    const storedPatients = localStorage.getItem("patients");
    return storedPatients ? JSON.parse(storedPatients) : (patientData ? [{ ...patientData, id: 1 }] : []);
  };


  const [patients, setPatients] = useState(loadPatientsFromLocalStorage());
  const [newPatient, setNewPatient] = useState({ name: "", contact: "", service: "", serviceType: "" });
  const navigate = useNavigate();
  useEffect(() => {
    // Save patients to localStorage whenever they change
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);
  const handleBillingNavigation = (event) => {
    event.preventDefault();
    navigate('/biling-page', { state: { patientData } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleAddPatient = () => {
    setPatients((prevPatients) => [
      ...prevPatients,
      { ...newPatient, id: prevPatients.length + 1 }
    ]);
    setNewPatient({ name: "", contact: "", service: "", serviceType: "" });
  };

  return (
    <div>
    <div style={{marginLeft:'30px'}}>
      <h2 style={{ textAlign: 'center' }}>REGISTER</h2>
      <h6 style={{ fontWeight: 'lighter', textAlign: 'center' }}>(who doesn't pay the bill.)</h6>


      <table border="1" style={{ width: '97%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead style={{ borderBottom: '1px solid black' }}>
          <tr>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Serial Number</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Name</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Contact Number</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px' }}>Service</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center', padding: '8px', padding: '8px' }}>Service {service} Type</th>
            <th style={{ borderRight: '1px solid black',textAlign:'center' }}>Bill</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td style={{ borderRight: '1px solid black' ,textAlign:'center', padding: '8px' }}>{patient.id}</td>
              <td style={{ borderRight: '1px solid black' ,textAlign:'center', padding: '8px' }}>{patient.name || `${firstName} ${lastName}`}</td>
              <td style={{ borderRight: '1px solid black',textAlign:'center' , padding: '8px'}}>{patient.contact || contactNo}</td>
              <td style={{ borderRight: '1px solid black',textAlign:'center' , padding: '8px'}}>{patient.service || service}</td>
              <td style={{ borderRight: '1px solid black' ,textAlign:'center', padding: '8px'}}>{patient.serviceType || serviceType}</td>
              <td style={{border:'none', textAlign:'center'}}><button style={{border:'none', textAlign:'center'}} onClick={handleBillingNavigation}>Bill</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CounterVisit;