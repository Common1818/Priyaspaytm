import React from "react";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";

const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Toast animation={true}>
      <Toast.Header id={alert.id}>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{alert.msg}</strong>
        <small>1 mins ago</small>
      </Toast.Header>
      <Toast.Body></Toast.Body>
    </Toast>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
