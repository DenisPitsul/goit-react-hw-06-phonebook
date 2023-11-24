import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import classes from './App.module.css'
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

const App = () => {
  const contacts = useSelector(getContacts)
    
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
        <ContactForm/>
        {
          contacts.length > 0 && (
            <div>
              <h2 className={classes.contactsTitle}>Contacts</h2>
              <Filter/>
              <ContactList/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
