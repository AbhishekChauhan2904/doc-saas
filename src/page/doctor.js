import React, { useState } from "react";
import Header from "../component/header";
import "./doctor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGauge, faPaperclip, faToiletPaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { faPager } from "@fortawesome/free-solid-svg-icons/faPager";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import Dashboard from "../component/Dashboard";
import Registration from "../component/Registration";
import Profile from "../component/Profile";
import CounterVisit from "../component/countervisit";
import OPD from "../component/opd";
import Surgery from "../component/surgery";
import Appointment from "../component/Appointment";
import Setting from "../component/setting";

const Doctor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeButton, setActiveButton] = useState('dashboard');
  const [showRegistrationSubButtons, setShowRegistrationSubButtons] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = (button) => {
    if (button === 'registration') {
      setShowRegistrationSubButtons(!showRegistrationSubButtons);
    } else {
      setShowRegistrationSubButtons(false);
      setActiveButton(button);
    }
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'dashboard':
        return <Dashboard />;
      case 'newRegister':
        return <Registration />;
      case 'Register':
        return <CounterVisit />;
        case 'OPD':
        return <OPD/>;
      case 'surgery':
        return <Surgery/>;
      case 'appointment':
        return <Appointment/>;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Setting/>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Header />
      <div
        style={{
          flex: 1,
          paddingTop: "70px",
          paddingLeft: isHovered ? "290px" : "50px",
          transition: "padding-left 0.3s ease",
          overflowY: "auto"
        }}
      >
        {renderContent()}
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: isHovered ? "280px" : "50px",
          backgroundColor: "rgb(176, 187, 236)",
          position: "fixed",
          top: "60px",
          left: "0",
          bottom: "0",
          overflowY: "auto",
          transition: "width 0.3s ease",
          zIndex: 999,
        }}
      >
        {!isHovered && (
          <div
            style={{
              display: 'flex',
              marginLeft:'10px',
              height: '100%'
            }}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        )}
        {isHovered && (
          <>
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"20px", border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('dashboard')}
            >
              <FontAwesomeIcon icon={faGauge} /> Dashboard
            </button>
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"10px",border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('registration')}
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Registration
            </button>
            {showRegistrationSubButtons && (
              <>
                <button 
                  style={{backgroundColor: "rgb(176, 187, 236)", marginLeft: "20px", marginTop:"10px", border:'none', width:'260px', fontWeight:'bold', fontSize:"medium"}} 
                  onClick={() => handleButtonClick('newRegister')}
                >
                  New Register
                </button>
                <button 
                  style={{backgroundColor: "rgb(176, 187, 236)", marginLeft: "20px", marginTop:"10px", border:'none', width:'260px', fontWeight:'bold', fontSize:"medium"}} 
                  onClick={() => handleButtonClick('Register')}
                >
                  Register
                </button>
              </>
            )}
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"10px",border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('OPD')}
            >
              <FontAwesomeIcon icon={faPager} /> OPD
            </button>
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"10px",border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('surgery')}
            >
              <FontAwesomeIcon icon={faPager} /> Surgery
            </button>
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"10px",border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('appointment')}
            >
              <FontAwesomeIcon icon={faPaperclip} /> Appointment
            </button>
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"10px",border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('profile')}
            >
              <FontAwesomeIcon icon={faUser}/> Profile
            </button>
            <button 
              style={{backgroundColor: "rgb(176, 187, 236)", marginTop:"10px",border:'none', width:'280px', fontWeight:'bold', fontSize:"large"}} 
              onClick={() => handleButtonClick('settings')}
            >
              <FontAwesomeIcon icon={faGears} /> Settings
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Doctor;
