import React, { useReducer } from 'react';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import uuid from 'uuid';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {

    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Ismail Ghani',
                email: 'ismail@xyz.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Anas Ahmed Khan Niazi',
                email: 'anas@xyz.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Syed Ammar Jamil',
                email: 'ammar@xyz.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {

        contact.id = uuid.v4();

        dispatch({
            type: ADD_CONTACT,
            payload: contact
        });
    }

    // Delete Contact
    const deleteContact = id => {

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact,
                deleteContact
            }}
        >
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;