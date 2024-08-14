import React, { useState } from 'react';

const specializations = {
  Medical: [
    "Allergy and Immunology",
    "Cardiology",
    "Endocrinology",
    "Gastroenterology",
    "Geriatrics",
    "Hematology",
    "Hepatology",
    "Infectious Disease",
    "Nephrology",
    "Neurology",
    "Oncology",
    "Pulmonology",
    "Rheumatology", // Focuses on joint and bone diseases
    "Sleep Medicine"
  ],
  Surgical: [
    "Cardiothoracic Surgery",
    "Colorectal Surgery",
    "General Surgery",
    "Neurosurgery",
    "Orthopedic Surgery", // Primary specialization for bone-related conditions
    "Otolaryngology (ENT)",
    "Pediatric Surgery",
    "Plastic Surgery",
    "Trauma Surgery",
    "Urology",
    "Vascular Surgery"
  ],
  Diagnostic: [
    "Pathology",
    "Radiology",
    "Nuclear Medicine"
  ],
  ObstetricsAndGynecology: [
    "General Obstetrics and Gynecology",
    "Gynecologic Oncology",
    "Maternal-Fetal Medicine",
    "Reproductive Endocrinology and Infertility"
  ],
  Pediatrics: [
    "General Pediatrics",
    "Pediatric Cardiology",
    "Pediatric Endocrinology",
    "Pediatric Gastroenterology",
    "Pediatric Hematology/Oncology",
    "Pediatric Infectious Disease",
    "Pediatric Nephrology",
    "Pediatric Neurology",
    "Pediatric Orthopedics", // Pediatric focus on bone conditions
    "Pediatric Pulmonology",
    "Pediatric Rheumatology" // Pediatric focus on joint and bone diseases
  ],
  Psychiatry: [
    "General Psychiatry",
    "Child and Adolescent Psychiatry",
    "Forensic Psychiatry",
    "Geriatric Psychiatry",
    "Addiction Psychiatry"
  ],
  EmergencyMedicine: [
    "General Emergency Medicine",
    "Medical Toxicology",
    "Pediatric Emergency Medicine",
    "Sports Medicine" // Often deals with bone and joint injuries
  ],
  Anesthesiology: [
    "General Anesthesiology",
    "Cardiac Anesthesiology",
    "Pediatric Anesthesiology",
    "Pain Medicine"
  ],
  Dermatology: [
    "General Dermatology",
    "Dermatopathology",
    "Pediatric Dermatology",
    "Mohs Surgery"
  ],
  FamilyMedicine: [
    "General Family Medicine",
    "Geriatric Medicine",
    "Sports Medicine" // Often deals with bone and joint injuries
  ],
  OtherSpecialties: [
    "Ophthalmology",
    "Physical Medicine and Rehabilitation", // Focuses on recovery from bone injuries
    "Preventive Medicine",
    "Occupational Medicine",
    "Public Health"
  ]
};

const DoctorProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [workEntries, setWorkEntries] = useState([{}]);
  const [experiences, setExperiences] = useState([{}]);
  const [educations, setEducations] = useState([{}]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleAddEntry = (setEntries) => {
    setEntries((prevEntries) => [...prevEntries, {}]);
  };

  const handleImageUploadWithIndex = (e, index, entries, setEntries) => {
    const updatedEntries = [...entries];
    handleImageUpload(e, (image) => {
      updatedEntries[index].image = image;
      setEntries(updatedEntries);
    });
  };

  const handleDeleteImageWithIndex = (index, entries, setEntries) => {
    const updatedEntries = [...entries];
    updatedEntries[index].image = null;
    setEntries(updatedEntries);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedSpecialization('');
  };

  const handleSpecializationChange = (e) => {
    setSelectedSpecialization(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Save the data here, e.g., send to an API or store in state
  };


  return (
    <div>
      <h1 style={{ textAlign: 'center', backgroundColor:'rgb(133, 151, 231)',color:'white'  }}>Doctor Profile Form</h1>
      <hr />
      <h2 style={{textAlign:'center'}}>Personal Details</h2>
      <br />
      <form onSubmit={handleSubmit}>

        <label style={{ marginLeft: '60px' }}>
          Name:
          <input type="text" name="name" style={{ marginLeft: '10px' }} disabled={isSubmitted}  />
        </label>
        <label style={{ marginLeft: '20px' }}>
          Gender:
          <input type="text" name="gender" style={{ marginLeft: '10px' }} disabled={isSubmitted}  />
        </label>
        <label style={{ marginLeft: '20px' }}>
          Age:
          <input type="number" name="age" style={{ marginLeft: '10px' }}disabled={isSubmitted}  />
        </label>
        <br />
        <br />
        <label style={{ marginLeft: '60px' }}>
          Licence no:
          <input type="text" name="licenceNo" style={{ marginLeft: '10px' }} disabled={isSubmitted}  />
        </label>
        <br /><br />
        <label style={{ marginLeft: '60px', marginBottom: '20px' }}>
          Profile Image:
          <input type="file" onChange={(e) => handleImageUpload(e, setProfileImage)} style={{ marginLeft: '10px' }}  disabled={isSubmitted} />
          {profileImage && (
            <div>
              <br />
              <img src={profileImage} alt="Profile" width="100" style={{ marginLeft: '110px' }} />
              <button type="button" onClick={() => setProfileImage(null)} style={{ marginLeft: '10px', backgroundColor: 'rgb(133, 151, 231)', color: 'white', border: 'none', height: '30px' }} disabled={isSubmitted} >Delete</button>
            </div>
          )}
        </label>
        <hr />
        <h2 style={{ textAlign: 'center' }}>Specializations</h2>
        <br />
        <label style={{ marginLeft: '60px' }}>
          Department:
          <select value={selectedDepartment} onChange={handleDepartmentChange} style={{ marginLeft: '10px',height:'30px' }} disabled={isSubmitted} >
            <option value="">Select Department</option>
            {Object.keys(specializations).map((department) => (
              <option key={department} value={department}>{department.replace(/([A-Z])/g, ' $1').trim()}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: '60px' }}>
          Specialization:
          <select value={selectedSpecialization} onChange={handleSpecializationChange} disabled={!selectedDepartment || isSubmitted } style={{ marginLeft: '10px', height:'30px'  }}>
            <option value="">Select Specialization</option>
            {selectedDepartment && specializations[selectedDepartment].map((specialization) => (
              <option key={specialization} value={specialization}>{specialization}</option>
            ))}
          </select>
        </label>
  <hr style={{marginTop:'40px',marginBottom:'20px'}}/>
        <h2 style={{textAlign:'center'}}>Performance</h2>
        <label style={{marginLeft:'60px',marginTop:'20px'}}>
          Patient flow (Daily Visit):
          <input type="number" name="dailyVisit" style={{marginLeft:'10px'}} disabled={isSubmitted}/>
        </label>
        <label style={{marginLeft:'20px'}}>
          Total visit:
          <input type="number" name="totalVisit" style={{marginLeft:'10px'}} disabled={isSubmitted}/>
        </label>
        <label style={{marginLeft:'20px'}}>
          Cure Ratio:
          <input type="number" name="cureRatio" step="0.01" style={{marginLeft:'10px'}} disabled={isSubmitted}/>
        </label>
        <br/>
        <label style={{marginTop:'30px', marginLeft:'60px'}}>
          City Patient (%):
          <input type="number" name="cityPatient" style={{marginLeft:'10px'}} disabled={isSubmitted}/>
        </label>
        <label style={{marginLeft:'20px'}}>
          Outside Patient (%):
          <input type="number" name="outsidePatient" style={{marginLeft:'10px'}} disabled={isSubmitted}/>
        </label>
        <label style={{marginLeft:'20px'}}>
          General Surgery:
          <input type="number" name="generalSurgery" style={{marginLeft:'10px'}} disabled={isSubmitted}/>
        </label>
        <br/>
        <label style={{marginLeft:"60px",marginTop:'30px',marginBottom:'20px'}} disabled={isSubmitted}>
          Critical Surgery:
          <input type="number" name="criticalSurgery" style={{marginLeft:'10px'}} disabled={isSubmitted} />
        </label>
        <hr style={{marginTop:'20px',marginBottom:'20px'}}/>

        <h2 style={{textAlign:'center'}}>Work at</h2>
        {workEntries.map((_, index) => (
          <div key={index}>
          <h4 style={{marginLeft:'60px',marginTop:'20px'}}>Entry {index + 1}</h4>
            <label style={{marginLeft:'60px',marginTop:'20px'}}>
              Hospital/Clinic Name:
              <input type="text" name={`hospitalClinicName${index}`}  style={{marginLeft:'10px'}} disabled={isSubmitted} />
            </label>
           
            <label style={{marginLeft:'30px'}}>
              Pin code:
              <input type="text" name={`pinCode${index}`}  style={{marginLeft:'10px'}} disabled={isSubmitted} />
            </label>
            <label style={{marginLeft:'30px'}}>
              Landmark:
              <input type="text" name={`landmark${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <br/>
            <label style={{marginLeft:'60px', marginTop:'30px'}}>
              Address:
              <input name={`address${index}`} style={{marginLeft:'10px', width:'350px', height:'50px'}} disabled={isSubmitted} />
            </label>
            <label style={{marginLeft:'20px'}}>
              Road/street:
              <input type="text" name={`roadStreet${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <label style={{marginLeft:'20px'}}>
              City:
              <input type="text" name={`city${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted} />
            </label>
            <br/>
            <label style={{marginLeft:'60px',marginTop:'30px'}}>
              District:
              <input type="text" name={`district${index}`}  style={{marginLeft:'10px'}} disabled={isSubmitted} />
            </label>
            <label style={{marginLeft:'20px'}}>
              State:
              <input type="text" name={`state${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted} />
            </label>
            <label style={{marginLeft:'20px'}}>
              Compounder/staff number:
              <input type="text" name={`compounderStaffNumber${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddEntry(setWorkEntries)} style={{marginLeft:'80px',marginTop:'30px',backgroundColor:'rgb(133, 151, 231)',height:'40px', borderRadius:'10px',color:'white',border:'none',marginBottom:'20px'}} disabled={isSubmitted} >Add More Work</button>
  <hr/>
        <h2 style={{textAlign:'center'}}>Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
          <h4 style={{marginLeft:'60px',marginTop:'20px'}}>Entry {index + 1}</h4>
            <label style={{marginLeft:'60px',marginTop:'20px'}}>
              Institute name:
              <input type="text" name={`instituteName${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <label style={{marginLeft:'30px'}}>
              Duration:
              <input type="number" name={`duration${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <br/>
            <label style={{marginTop:'30px',marginLeft:'60px'}}>
              Address:
              <input name={`instituteAddress${index}`} style={{marginLeft:'10px', width:'350px', height:'50px'}} disabled={isSubmitted}  />
            </label>
            <label style={{marginLeft:'30px'}}>
              Started on:
              <input type="date" name={`startedOn${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <label style={{marginLeft:'30px'}}>
              End on:
              <input type="date" name={`endOn${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted} />
            </label>
            <br/>
            <label style={{marginLeft:'60px',marginTop:'30px'}}>
              Image Upload:
              <input type="file" onChange={(e) => handleImageUploadWithIndex(e, index, experiences, setExperiences)} style={{ marginLeft: '10px' }}  disabled={isSubmitted}   />
              {experience.image && (
                <div>
                  <img src={experience.image} alt={`Experience ${index}`} width="100" style={{marginLeft:'100px',marginTop:'30px'}}/>
                  <button type="button" onClick={() => handleDeleteImageWithIndex(index, experiences, setExperiences)} style={{ marginLeft: '10px', backgroundColor: 'rgb(133, 151, 231)', color: 'white', border: 'none', height: '30px' }} disabled={isSubmitted} >Delete</button>
                </div>
              )}
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddEntry(setExperiences)} style={{marginLeft:'80px',marginTop:'30px',backgroundColor:'rgb(133, 151, 231)',height:'40px', borderRadius:'10px',color:'white',border:'none',marginBottom:'20px'}} disabled={isSubmitted} >Add More Experience</button>
      <hr/>
        <h2 style={{textAlign:'center'}}>Education Qualification</h2>
        {educations.map((education, index) => (
          <div key={index}>
          <h4 style={{marginLeft:'60px',marginTop:'20px'}}>Entry {index + 1}</h4>
            <label style={{marginLeft:'60px', marginTop:'30px'}}>
              Course:
              <input type="text" name={`course${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <label style={{marginLeft:'30px'}}>
              College Name:
              <input type="text" name={`collegeName${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <label style={{marginLeft:'30px'}}>
              City:
              <input type="text" name={`city${index}`} style={{marginLeft:'10px'}} disabled={isSubmitted}  />
            </label>
            <br/>
            <label style={{marginLeft:'60px',marginTop:'30px'}}>
              Passing Year:
              <input type="number" name={`passingYear${index}`} disabled={isSubmitted} style={{marginLeft:'10px'}}  />
            </label>
            <br/>
            <label style={{marginLeft:'60px',marginTop:'30px'}}>
              Image Upload:
              <input type="file" onChange={(e) => handleImageUploadWithIndex(e, index, educations, setEducations)} disabled={isSubmitted}  style={{ marginLeft: '10px' }} />
              {education.image && (
                <div>
                  <img src={education.image} alt={`Education ${index}`} width="100" style={{marginLeft:'100px',marginTop:'30px'}}/>
                  <button type="button" onClick={() => handleDeleteImageWithIndex(index, educations, setEducations)} style={{ marginLeft: '10px', backgroundColor: 'rgb(133, 151, 231)', color: 'white', border: 'none', height: '30px' }} disabled={isSubmitted} >Delete</button>
                </div>
              )}
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddEntry(setEducations)} style={{marginLeft:'80px',marginTop:'30px',backgroundColor:'rgb(133, 151, 231)',height:'40px', borderRadius:'10px',color:'white',border:'none',marginBottom:'20px'}} disabled={isSubmitted} >Add More Education</button>
        <hr />
        <label style={{ marginLeft: '60px' }}>
          <input type="checkbox" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)} disabled={isSubmitted} style={{marginLeft:'10px'}} />
           <span style={{marginLeft:'10px'}}> I agree to the terms and conditions.</span> 
        </label>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={{ backgroundColor: 'rgb(133, 151, 231)', color: 'white', border: 'none', height: '40px', width: '100px', marginBottom:'20px' }} disabled={isSubmitted}>Submit</button>
        </div>
      </form>
     
    </div>
  );
};

export default DoctorProfileForm;
