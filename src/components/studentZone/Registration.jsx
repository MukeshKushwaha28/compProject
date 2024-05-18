// src/Form.js
import React, { useState } from "react";
import "../../styles/studentZone/SignUp.css";
import Header from "../Header";
import Footer from "../Footer";

function Registration() {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    courseName: "",
    franchiseName: "",
    email: "",
    dob: "",
    parentsNames: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="main">
      <div className="imgge"></div>
      <div className="bg-text">
        <h1>Student Register</h1>
      </div>
      </div>

      <div className="App">
        <p>Fill up form & send us details for franchise approval :</p>
        <p>(*) Fields are mandatory !</p>
        <form>
          <h4>*CHOOSE LOCATION</h4>
          <div className="location">
            <div>
              <label htmlFor="stateSelect"> State:</label>
              <br />
              <select id="stateSelect" name="state">
                <option value="">Select a state</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                {/* Add more state options as needed */}
              </select>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect"> Distict:</label>
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect"> Distict:</label>
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>
          </div>

          <h4>*CHOOSE COURSE</h4>
          <div className="location">
            <div>
              <div>
                <label htmlFor="stateSelect">Course Category:</label>
                <br />
                <select id="stateSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect">Duration*</label>
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect">Course Name*</label>
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>
          </div>

          <h4>Enter Personal Detaits</h4>
          <div className="Persanal">
            <div>
              <label htmlFor="stateSelect">Name*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Father's Name*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Father Name"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Email ID</label>
              <br />
              <input
                type="email"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Mother's Name*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Last General Qualification*</label>
              <br />
              <select id="DistrictSelect" name="state">
                <option value="">Select Qualification</option>
                <option value="CA">Class VIII</option>
                <option value="NY">10th standard</option>
                <option value="NY">12th standard</option>
                <option value="NY">Graduate</option>
                <option value="NY">Post Graduate</option>
                <option value="NY">others</option>
                {/* Add more state options as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="stateSelect">DOB*</label>
              <br />
              <input
                type="date"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Phone Number*</label>
              <br />
              <input
                type="Number"
                name=""
                id="DistrictSelect"
                placeholder="Enter Phone Number"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Address**</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Address"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Gender*</label>
              <br />
              <select id="DistrictSelect" name="state">
                <option value="">Select Gender</option>
                <option value="CA">Male</option>
                <option value="NY">Female</option>
                <option value="NY">other</option>

                {/* Add more state options as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="stateSelect">Pin Code**</label>
              <br />
              <input
                type="Number"
                name=""
                id="DistrictSelect"
                placeholder="Enter Pincode"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">City*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter City"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Passport Size Color Photo*</label>
              <br />
              <input
                type="file"
                name=""
                id="DistrictSelect"
                placeholder="Enter City"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Email*</label>
              <br />
              <input
                type="email"
                name=""
                id="DistrictSelect"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label htmlFor="stateSelect">ID Proof*</label>
              <br />
              <input
                type="file"
                name=""
                id="DistrictSelect"
                placeholder="Enter City"
              />
            </div>
          </div>

          <button className="button"> Registration</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
