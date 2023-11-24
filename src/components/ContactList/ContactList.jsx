import { useEffect } from 'react'
import classes from './ContactList.module.css'

const ContactList = ({contacts, onRemove}) => {

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    
    useEffect(() => {
        return () => {
            localStorage.setItem('contacts', [])
        }
    }, [])

    return (
        <ul className={classes.contactList}>
            {
                contacts.map(contact => 
                    <li key={contact.id} className={classes.contactItem}>
                        <p className={classes.contactItemText}>{contact.name}: {contact.number}</p>
                        <button 
                            type='button' 
                            className={classes.removeBtn} 
                            onClick={() => onRemove(contact)}>Remove</button>
                    </li>    
                )
            }
        </ul>
    )
}

export default ContactList;