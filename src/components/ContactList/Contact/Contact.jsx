import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import css from "./Contact.module.css";
const Contact = ({ name, number, handleDelete, id }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.personalInfo}>
        <p>
          <span className={css.icons}>
            <FontAwesomeIcon icon={faUser} />
          </span>

          {name}
        </p>
        <p>
          <span className={css.icons}>
            <FontAwesomeIcon icon={faPhone} />
          </span>

          {number}
        </p>
      </div>
      <button onClick={() => handleDelete(id)} className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
