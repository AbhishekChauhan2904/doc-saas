import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceData } from './serviceData';

const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    maritalStatus: '',
    address: '',
    city: '',
    state: '',
    contactNo: '',
    service: '',
    serviceType: ''
  });

  const refs = {
    title: useRef(),
    firstName: useRef(),
    middleName: useRef(),
    lastName: useRef(),
    age: useRef(),
    gender: useRef(),
    maritalStatus: useRef(),
    address: useRef(),
    city: useRef(),
    state: useRef(),
    contactNo: useRef(),
    service: useRef(),
    serviceType: useRef(),
    register: useRef(),
    registerAndBill: useRef(),
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleKeyPress = (e, refName) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      refs[refName].current.focus();
    }
  };

  const shoot = () => {
    alert("Patient Registered");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add logic to handle form submission, e.g., send data to a server
  };

  const handleBillingNavigation = (event) => {
    event.preventDefault();
    navigate('/biling-page', { state: { patientData: formData } });
  };
  const handleCounterNavigation = (event) => {
    event.preventDefault();
    navigate('/counter-vist', { state: { patientData: formData } });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.header}>New Patient Registration Form</h2>

      {/* Form fields go here */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Title:</label>
        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'firstName')}
          style={styles.input}
          ref={refs.title}
        >
          <option value="">Select Title</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder='Enter first name'
          value={formData.firstName}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'middleName')}
          style={styles.input}
          ref={refs.firstName}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Middle Name:</label>
        <input
          type="text"
          name="middleName"
          placeholder="Enter middle name"
          value={formData.middleName}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'lastName')}
          style={styles.input}
          ref={refs.middleName}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'age')}
          style={styles.input}
          ref={refs.lastName}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'gender')}
          style={styles.input}
          ref={refs.age}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'maritalStatus')}
          style={styles.input}
          ref={refs.gender}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Marital Status:</label>
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'address')}
          style={styles.input}
          ref={refs.maritalStatus}
        >
          <option value="">Select Marital Status</option>
          <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Address:</label>
        <input
          type="text"
          name="address"
          placeholder='Enter address'
          value={formData.address}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'city')}
          style={styles.input}
          ref={refs.address}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>City:</label>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'state')}
          style={styles.input}
          ref={refs.city}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>State:</label>
        <input
          type="text"
          name="state"
          placeholder='Enter state'
          value={formData.state}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'contactNo')}
          style={styles.input}
          ref={refs.state}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Contact No:</label>
        <input
          type="text"
          name="contactNo"
          placeholder='Enter contact no'
          value={formData.contactNo}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'service')}
          style={styles.input}
          ref={refs.contactNo}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Select Service:</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e, 'serviceType')}
          style={styles.input}
          ref={refs.service}
        >
          <option value="">Select Service</option>
          <option value="OPD">OPD</option>
          <option value="Surgery">Surgery</option>
        </select>
      </div>

      {formData.service && (
        <div style={styles.formGroup}>
          <label style={styles.label}>Select {formData.service} Type:</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            onKeyPress={(e) => handleKeyPress(e, 'register')}
            style={styles.input}
            ref={refs.serviceType}
          >
            <option value="">Select {formData.service} Type</option>
            {serviceData[formData.service].map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      )}
      <div style={styles.buttonGroup}>
  <button type="submit" style={styles.button} ref={refs.register} onClick={handleCounterNavigation} >Register</button>
  <button type="button" onClick={handleBillingNavigation} style={styles.button} ref={refs.registerAndBill}>Register and Bill</button>
</div>

    </form>
  );
};

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  formGroup: {
    marginBottom: '10px'
  },
  label: {
    display: 'block',
    marginBottom: '5px'
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default PatientRegistrationForm;
