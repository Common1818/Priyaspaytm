import React from "react";
import "./css/Specifications.css";

const Specifications = ({ specifications }) => {
  console.log(specifications);
  const brakes = specifications && specifications.brakes;
  const chain = specifications && specifications.chain;
  const color = specifications && specifications.color;
  const framematerial = specifications && specifications.framematerial;
  const frontderailleur = specifications && specifications.frontderailleur;
  const rearderailleur = specifications && specifications.rearderailleur;
  const handlebar = specifications && specifications.handlebar;
  const rim = specifications && specifications.rim;
  const suspension = specifications && specifications.suspension;
  const shifter = specifications && specifications.shifter;
  const tire = specifications && specifications.tire;

  return (
    <div class="container mt-4 specification-container">
      <h3>SPECIFICATIONS</h3>
      <div class="row">
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Frame</h4>

            <span style={{ fontSize: "1.2rem" }}>
              {framematerial && framematerial}
            </span>
          </div>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Fork_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Fork</h4>

            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {suspension && suspension}
            </span>
          </div>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Shifter_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Shifter</h4>

            <span style={{ fontSize: "1.2rem" }}> {shifter && shifter}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Chain_2017_04.png"
            alt=""
          ></img>
          <h4>CHAIN</h4>

          <span style={{ fontSize: "1.2rem" }}> {chain && chain}</span>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rear_Derail_2017_04.png"
            alt=""
          ></img>
          <h4>REAR DERAILLEUR</h4>

          <span style={{ fontSize: "1.2rem" }}>
            {" "}
            {rearderailleur && rearderailleur}
          </span>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Front_Derail_2017_04.png"
            alt=""
          ></img>
          <h4>FRONT DERAILLEUR</h4>
          <span style={{ fontSize: "1.2rem" }}>
            {" "}
            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {frontderailleur && frontderailleur}
            </span>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rims_2017_04.png"></img>
          <h4>RIMS</h4>

          <span style={{ fontSize: "1.2rem" }}> {rim && rim}</span>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Tyre_2017_04.png "
            alt=" "
          ></img>
          <h4>TYRES</h4>
          <span style={{ fontSize: "1.2rem" }}> {tire && tire}</span>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Brake_Set_2017_04.png"
            alt=" "
          ></img>
          <h4>BRAKES</h4>

          <span style={{ fontSize: "1.2rem" }}> {brakes && brakes}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Handle_Bar_2017_04.png"></img>
          <h4>HANDLEBAR</h4>

          <span style={{ fontSize: "1.2rem" }}> {handlebar && handlebar}</span>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_Size_2017_04.png"
            alt=" "
          ></img>
          <h4>SIZES</h4>
          MEDIUM (17.1T), LARGE (19.0T)
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Color_2017_04.png"
            alt=" "
          ></img>
          <h4>COLOURS</h4>
          <span style={{ fontSize: "1.2rem" }}> {color && color}</span>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
