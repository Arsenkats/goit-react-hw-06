import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import contactsList from "./contacts.json";
import { useEffect, useState } from "react";
const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contacts"));
    return savedData?.length ? savedData : contactsList;
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        filteredContacts={filteredContacts}
      />
    </div>
  );
};

export default App;
