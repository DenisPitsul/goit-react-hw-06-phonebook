import { getContacts, getFilter } from 'redux/selectors';
import classes from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}

const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()
    const filteredContacts = getFilteredContacts(contacts, filter)

    const onRemove = (id) => {
        dispatch(deleteContact(id))
    }

    return (
        <ul className={classes.contactList}>
            {
                filteredContacts.map(contact => 
                    <li key={contact.id} className={classes.contactItem}>
                        <p className={classes.contactItemText}>{contact.name}: {contact.number}</p>
                        <button 
                            type='button' 
                            className={classes.removeBtn} 
                            onClick={() => onRemove(contact.id)}>Remove</button>
                    </li>    
                )
            }
        </ul>
    )
}

export default ContactList;