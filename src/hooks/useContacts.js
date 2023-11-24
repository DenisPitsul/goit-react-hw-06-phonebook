import { useMemo } from "react"

export const useContacts = (contacts, filter) => {
    const filteredContacts = useMemo(() => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }, [contacts, filter]);
    return filteredContacts;
}