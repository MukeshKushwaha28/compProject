import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/studentZone/Login.css";

const FranchiseLogin = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="imgge"></div>
        <div className="bg-text">
          <h1>Franchise Login</h1>
        </div>
      </div>

      <div className="LoginContainer">
        <div className="LoginContent">
          <div className="Loginpara">
            <p>ENTER VALID CREDENTIALS TO LOGIN INTO YOUR PANEL</p>
          </div>

          <div className="LoginForm">
            <div>
              <div>
                <label htmlFor="stateSelect">Registation Number</label>
              </div>
              <input type="number" name="" id="DistrictSelect" />
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect">Password</label>
              </div>
              <input type="password" name="" id="DistrictSelect" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FranchiseLogin;
