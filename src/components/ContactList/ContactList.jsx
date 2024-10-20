import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ handleDelete, filteredContacts }) => {
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact
            id={item.id}
            name={item.name}
            number={item.number}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
