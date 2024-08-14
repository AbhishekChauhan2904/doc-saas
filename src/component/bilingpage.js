import React from 'react';
import { useLocation } from 'react-router-dom';

const BillingForm = () => {
  const location = useLocation();
  const patientData = location.state?.patientData || {};
  const { firstName, lastName, age, gender, contactNo, address, city, service, serviceType } = patientData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Billing form submitted');
    // Add logic to handle billing form submission
  };

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>Invoice</h2>
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Patient ID:<span style={styles.text}>12345</span>
            </label>
          </div>
          <div style={{ ...styles.formGroup, ...styles.marginLeft }}>
            <label style={styles.label}>
              Date:<span style={styles.text}>{currentDate}</span>
            </label>
          </div>
        </div>

        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Name:<span style={styles.text}>{`${firstName} ${lastName}`}</span>
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={{...styles.label,marginLeft:'40px'}}>
              Age: <span style={styles.text}>{age}</span>
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={{...styles.label, marginLeft:'30px'}}>
              Gender: <span style={styles.text}>{gender}</span>
            </label>
          </div>
        </div>
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Address: <span style={styles.text}>{address}</span>
            </label>
          </div>
          <div style={{ ...styles.formGroup, ...styles.marginLeft }}>
            <label style={styles.label}>
              City: <span style={styles.text}>{city}</span>
            </label>
          </div>
        </div>

        <hr />
        <div style={styles.formRow}>
          <div style={{ marginLeft: '10px' }}>
            <label style={{ ...styles.label, marginLeft: '10px' }}>
              Service Type:{' '}
            </label>
            <span style={{ ...styles.text, marginLeft: '20px' }}>{service}</span>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label style={{ ...styles.label, marginLeft: '20px' }}>
              Service {service} Type:
            </label>
            <span style={styles.text}>{serviceType}</span>
          </div>
          <div>
            <label style={{ ...styles.label, marginLeft: '20px' }}>Doctor</label>
            <span style={styles.text}>Dr.Amit jain</span>
          </div>
          <div>
            <label style={{ ...styles.label, marginLeft: '10px' }}>Fees</label>
            <span style={{ ...styles.text, marginLeft: '5px' }}>400</span>
          </div>
          <div>
            <label style={styles.label}>Total Amount</label>
            <span style={{ ...styles.text, marginLeft: '5px' }}>418</span>
            <span style={{ ...styles.text }}>(GST)</span>
          </div>
        </div>
        <hr style={{ marginTop: '510px' }} />
        <div style={{ marginLeft: '480px' }}>
          <label style={styles.label}>
            Discount <span style={{ ...styles.text, marginLeft: '25px' }}>100</span>
          </label>
          <label style={styles.label}>
            Net Amount <span style={{ ...styles.text }}>300</span>
          </label>
        </div>
        <hr />
        <div style={{ marginLeft: '460px' }}>
            <label style={styles.label}>authorized signature</label>
          </div>
      </form>
      <div style={styles.buttonGroup} className="no-print">
        <button type="button" onClick={handlePrint} style={styles.button}>
          Print Bill
        </button>
      </div>
      <style>
        {`
          @media print {
            .no-print {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '10px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  text: {
    padding: '8px',
    borderRadius: '4px',
    flex: 1,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  marginLeft: {
    marginLeft: '280px',
  },
};

export default BillingForm;
