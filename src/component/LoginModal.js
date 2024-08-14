import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './pagedo.css';
import logo from './icon.png';
import logo1 from './4.jpeg';

const CustomModal = ({ isOpen, onClose, children }) => {
  const customStyle = {
    width: '730px',
    height: '500px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <div style={customStyle}>
        {children}
      </div>
    </Modal>
  );
};

const LoginModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);

  const handleSendVerificationCode = () => {
    // Implement sending verification code to the provided email address
    // You can use a backend service for sending emails, such as nodemailer
    // Once the code is sent, set `isVerificationCodeSent` to true
    setIsVerificationCodeSent(true);
  };

  const handleLogin = () => {
    // Implement your login logic here, e.g., using Firebase, Auth0, or your server-side authentication
    console.log('Logging in with Name:', name, 'Email:', email, 'and Password:', password);
    // Close the modal after successful login
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
    <Modal.Body>
      <form>
     
      <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '13%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
           
          }}
        >
          <div className="choose">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={logo1} alt="Trego Logo" className="imag1" style={{}} />
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            top: '25%',
            left: '15%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            borderRadius: '8px',
           
          }}
        >
          <div className="choose">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={logo} alt="Trego Logo" className="hello" />
            </div>
          </div>
        </div>
          
          <div>
          <button onClick={onClose} className="closebutton" style={{ marginLeft: '99%',}} >X</button>
          <h3 className="firstHeading"  style={{ marginLeft: '52%', marginTop:'25px'  }}> Login or Register</h3>
          <h6  className="secondHeading" style={{marginLeft: '52%',  }}> Treatment Go Online(trego)</h6>
          <label htmlFor="password" style={{ marginLeft: '52%', marginTop:'15px' }}> Your Email Id</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                   style={{ width: '40%', padding: '10px', borderRadius: '10px', border: '1px solid black', marginLeft: '52%', marginTop:'5px'  }}
            />
            <button  style={{ width: '40%', height:'50px', borderRadius: '10px', border: '1px solid black', marginLeft: '52%', marginTop:'20px'  }}>Continue</button>
          </div>
        </form>
      </Modal.Body>
     
    </CustomModal>
  );
};

export default LoginModal;
