import React from "react";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import { resetFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = ({ value, onChange }) => (
  <div className={s.wrapper}>
    <label className={s.label}>
      <p className={s.title}>Find contact by name</p>
      <input
        className={s.input}
        onChange={onChange}
        value={value}
        type="text"
        name="name"
        required
      />
    </label>
    </div>
);

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(resetFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
