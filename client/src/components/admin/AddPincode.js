import React, { useState } from "react";
import { addPincode } from "../../actions/pincode";
import { connect } from "react-redux";

const AddPincode = ({ addPincode }) => {
  const [ExcludedArr, setExcludedArr] = useState([]);
  const [IncludedArr, setIncludedArr] = useState([]);
  const [ExcludedPincode, setExcludedPincode] = useState("");
  const [IncludedPincode, setIncludedPincode] = useState("");
  const [checked, setChecked] = useState(false);
  const [cityCode, setCityCode] = useState("");
  const [cityName, setCityName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      coverAllAreas: checked,
      includedAreas: IncludedArr,
      excludedAreas: ExcludedArr,
      cityCode,
      cityName,
    });
    addPincode({
      coverAllAreas: checked,
      includedAreas: IncludedArr,
      excludedAreas: ExcludedArr,
      cityCode,
      cityName,
    });
  };

  return (
    <div className="add-category container-fluid">
      <form>
        <input
          onChange={(e) => {
            setCityCode(e.target.value);
          }}
          type="number"
          placeholder="Enter City Code"
        />

        <input
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          type="text"
          placeholder="Enter City Name"
        />

        <input
          className="coverAll"
          onChange={(e) => {
            setChecked(!checked);
            setExcludedArr([]);
            setIncludedArr([]);
          }}
          type="checkbox"
        />

        {checked ? null : (
          <>
            <textarea
              disabled
              type="text"
              value={ExcludedArr}
              placeholder="Exlcuded Areas"
              cols="10"
              rows="30"
            ></textarea>
            <input
              onChange={(e) => {
                setExcludedPincode(e.target.value);
              }}
              placeholder="Add excluded areas"
              type="number"
            />
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIncludedArr([]);
                  setExcludedArr([...ExcludedArr, ExcludedPincode]);
                }}
              >
                Exclude
              </button>
            </div>
            <br />{" "}
            <textarea
              disabled
              type="text"
              value={IncludedArr}
              placeholder="Included Areas"
              cols="10"
              rows="30"
            ></textarea>
            <input
              onChange={(e) => {
                setIncludedPincode(e.target.value);
              }}
              placeholder="Add Included areas"
              type="number"
            />
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setExcludedArr([]);
                  setIncludedArr([...IncludedArr, IncludedPincode]);
                }}
              >
                Include
              </button>
            </div>
          </>
        )}

        <br />

        <button onClick={handleSubmit} type="submit">
          {" "}
          Add Pincode
          <span class="plus"> +</span>{" "}
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addPincode })(AddPincode);
