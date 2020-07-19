import React, { useReducer } from 'react';
import {v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTERS_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Alfred Wesker",
                email: "alfredw@umbrella.com",
                phone: "333-333-333",
                type: "professional",
            },
            {
                id: 2,
                name: "Sara Smith",
                email: "ssmith@gmail.com",
                phone: "111-111-111",
                type: "professional",
            }
        ], 
        current: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add contact
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact })
    };
    // Delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    };
    // Set current contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact })
    };
    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    };
    // Update contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    };

    // Filter contacts

    // Clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState