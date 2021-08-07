import React from "react";
import s from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, deleteContact }) => (
  <li key={id} className={s.item}>
    <div className={s.wrap}>
    <span className={s.name}>
      {name}: {number}
    </span>
    <button
     className={s.button}
     onClick={() => deleteContact(id)}
     type="button"
   >
      Delete
    </button>
    </div>
  </li>
);

export default ContactItem;
