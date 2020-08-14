import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPincodes, deletePincode } from "../../actions/pincode";

const AllPincodes = ({ getAllPincodes, pincodes, deletePincode }) => {
  console.log(pincodes);
  useEffect(() => {
    getAllPincodes();
  }, []);

  return (
    <div className="all-categories container-fluid">
      <h3>All Pincodes</h3>
      <table>
        <tbody>
          <tr>
            <th>CityCode</th>
            <th>CityName</th>
            <th>ExcludedAreas</th>
            <th>IncludedAreas</th>
          </tr>
          {pincodes &&
            pincodes.map((pincode) => {
              return (
                <tr key={pincode._id}>
                  <td>{pincode.cityCode}</td>
                  <td>{pincode.cityName}</td>
                  <td>
                    {pincode.excludedAreas.length == 0
                      ? "none"
                      : pincode.excludedAreas.map((data) => {
                          return (
                            <span>
                              {data}
                              {" , "}
                            </span>
                          );
                        })}
                  </td>
                  <td>
                    {pincode.coverAllAreas
                      ? "All"
                      : pincode.includedAreas.map((data) => {
                          return (
                            <span>
                              {data}
                              {" , "}
                            </span>
                          );
                        })}
                  </td>
                  <button
                    onClick={() => {
                      deletePincode(pincode._id);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="status">
        {/* <span>{deleteMessage && deleteMessage.message}</span> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pincodes: state.pincode.pincodes,
});

export default connect(mapStateToProps, { getAllPincodes, deletePincode })(
  AllPincodes
);
