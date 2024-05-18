// src/Form.js
import React, { useState } from "react";
import "../../styles/studentZone/SignUp.css";
import Header from "../Header";
import Footer from "../Footer";

function OnlineApplicaton() {
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
    <Header/>


 <div className="main">   
 <div className="imgge"></div>
<div className="bg-text">
  <h1>Franchise Register</h1>
</div>
</div>


    <div className="App">
      <p>Fill up form & send us details for franchise approval :</p>
      <p>(*) Fields are mandatory !</p>
      <form>
        <h4>APPLICATION FORM FOR AFFILATION</h4>
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



        <h4>INSTITUTE INFORMATION</h4>
        <div className="location">
          <div>
          <div>
            <label htmlFor="stateSelect">Name of the Institute *</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
              placeholder="Enter Name of Institude"
            />
          </div>
          </div>
           


          <div>
          <div>
            <label htmlFor="stateSelect">Pin*</label>
            <br />
            <input
              type="number"
              name=""
              id="DistrictSelect"
              placeholder="Enter Name of Institude"
            />
          </div>
          </div>

          <div>
          <div>
            <label htmlFor="stateSelect">Postal Address of the Institute*</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
              placeholder="Postal Address of the Institute*"
            />
          </div>
          </div>

        
        </div>


          
        <h4>INSTITUTE CONTACT NO.</h4>
        <div className="location">
          <div>
          <div>
            <label htmlFor="stateSelect">Phone1 *</label>
            <br />
            <input
              type="number"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name of Institude"
            />
          </div>
          </div>
           


          <div>
          <div>
            <label htmlFor="stateSelect">Phone2 *</label>
            <br />
            <input
              type="number"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name of Institude"
            />
          </div>
          </div>

          <div>
          <div>
            <label htmlFor="stateSelect">Email ID *</label>
            <br />
            <input
              type="email"
              name=""
              id="DistrictSelect"
              placeholder="Enter Email*"
            />
          </div>
          </div>

        
        </div>



        <h4>INFORMATION ABOUT CENTRE HEAD</h4>
        <div className="Persanal">
          <div>
            <label htmlFor="stateSelect">Name of the Centre Head *</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name of the Centre Head "
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Position Hold of the Centre *</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Position Hold of the Centre"
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Email of the Centre Head*</label>
            <br />
            <input
              type="email"
              name=""
              id="DistrictSelect"
              placeholder="example@gmail.com"
            />
          </div>


          <div>
            <label htmlFor="stateSelect">Date of Birth of the Centre Head*</label>
            <br />
            <input
              type="date"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name"
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
            <label htmlFor="stateSelect">Nationality *</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Address"
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
            <label htmlFor="stateSelect">Pin Code*</label>
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


        <h4>DOCUMENTS :</h4>
        <div className="Persanal">
        <div>
            <label htmlFor="stateSelect">Color Passport Size Photo Of The Centre Head*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter City"
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Voter Card Of The Institute Head*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
              placeholder="Enter City"
            />
          </div>


          <div>
            <label htmlFor="stateSelect">Pan Card Of The Institute Head*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
              placeholder="Enter City"
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Trade License Of The Institute*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter City"
            />
          </div>



          <div>
            <label htmlFor="stateSelect">Color Photo Of Office Room*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter City"
            />
          </div>
        </div>

        <button className="button"> Registration</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default OnlineApplicaton;
