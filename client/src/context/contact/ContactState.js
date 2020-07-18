import React, { useReducer } from 'react';
import uuid from 'uuid';
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
         ]
     };

     const [state, dispatch] = useReducer(ContactReducer, initialState);

     // Add contact

     // Delete contact

     // Set current contact

     // Clear current contact

     // Update contact

     // Filter contacts

     // Clear filter

     return (
         <ContactContext.Provider
         value={{
             contacts: state.contacts
         }}
         >
             { props.children }
         </ContactContext.Provider>
     )
 }

 export default ContactState