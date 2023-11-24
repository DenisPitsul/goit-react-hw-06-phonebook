import { useEffect, useState } from "react"
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import classes from './App.module.css'
import { useContacts } from "hooks/useContacts";

const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const filteredContacts = useContacts(contacts, filter);

  useEffect(() => {
    const contactsFromStorage = localStorage.getItem('contacts') 
      ? JSON.parse(localStorage.getItem('contacts')) : [];
    setContacts(contactsFromStorage)
  }, [])

  const onAdd = (newContact) => {
    const isContactExist = contacts
      .some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    
    if (isContactExist) {
      alert(newContact.name + ' is already in contacts.')
      return;
    }
  
    const contactToCreate = {
      id: nanoid(),
      ...newContact
    }
    setContacts([...contacts, contactToCreate]);
  }

  const onFilterChange = (nameValue) => {
    setFilter(nameValue)
  }

  const onRemove = (contactToRemove) => {
    setContacts(contacts.filter(contact => contact.id !== contactToRemove.id))
  }
    
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <div className={classes.container}>
        <h1 className={classes.title}>Phonebook</h1>
        <ContactForm onAdd={onAdd}/>
        {
          contacts.length > 0 && (
            <div>
              <h2 className={classes.contactsTitle}>Contacts</h2>
              <Filter filter={filter} onFilterChange={onFilterChange}/>
              <ContactList contacts={filteredContacts} onRemove={onRemove}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
