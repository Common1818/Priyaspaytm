import React from "react";
import { connect } from "react-redux";
// import "./css/Specifications.css";

const Specifications = ({
  setcolor,
  setsize,
  sethandlebar,
  setbrakes,
  settyres,
  setrims,
  setfrontDerailleur,
  setrearDerailleur,
  setchain,
  setshifter,
  setfork,
  setframe,
  specifications,
  color,
}) => {
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
            <textarea
              defaultValue={specifications.framematerial}
              onChange={(e) => {
                setframe(e.target.value);
              }}
              cols="30"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Fork_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Fork</h4>
            <textarea
              defaultValue={specifications.suspension}
              onChange={(e) => {
                setfork(e.target.value);
              }}
              cols="30"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Shifter_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Shifter</h4>
            <textarea
              defaultValue={specifications.shifter}
              onChange={(e) => {
                setshifter(e.target.value);
              }}
              cols="30"
              rows="1"
            ></textarea>
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
          <textarea
            defaultValue={specifications.chain}
            onChange={(e) => {
              setchain(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rear_Derail_2017_04.png"
            alt=""
          ></img>
          <h4>REAR DERAILLEUR</h4>
          <textarea
            defaultValue={specifications.rearderailleur}
            onChange={(e) => {
              setrearDerailleur(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Front_Derail_2017_04.png"
            alt=""
          ></img>
          <h4>FRONT DERAILLEUR</h4>
          <textarea
            defaultValue={specifications.frontderailleur}
            onChange={(e) => {
              setfrontDerailleur(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rims_2017_04.png"></img>
          <h4>RIMS</h4>
          <textarea
            defaultValue={specifications.rim}
            onChange={(e) => {
              setrims(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Tyre_2017_04.png "
            alt=" "
          ></img>
          <h4>TYRES</h4>
          <textarea
            defaultValue={specifications.tire}
            onChange={(e) => {
              settyres(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Brake_Set_2017_04.png"
            alt=" "
          ></img>
          <h4>BRAKES</h4>
          <textarea
            defaultValue={specifications.brakes}
            onChange={(e) => {
              setbrakes(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Handle_Bar_2017_04.png"></img>
          <h4>HANDLEBAR</h4>
          <textarea
            defaultValue={specifications.handlebar}
            onChange={(e) => {
              sethandlebar(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_Size_2017_04.png"
            alt=" "
          ></img>
          <h4>SIZE</h4>
          <textarea
            onChange={(e) => {
              setsize(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Color_2017_04.png"
            alt=" "
          ></img>
          <h4>COLOURS</h4>
          <textarea
            onChange={(e) => {
              setcolor(e.target.value);
            }}
            disabled
            value={color}
            cols="30"
            rows="1"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  specifications: state.product.product.specifications,
});

export default connect(mapStateToProps)(Specifications);
