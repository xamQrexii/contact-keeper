import React, { useRef, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {

    const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
    const text = useRef(null);

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input type='search' ref={text} placeholder='Filter contacts...' onChange={onChange} />
        </form>
    )
}

export default ContactFilter
