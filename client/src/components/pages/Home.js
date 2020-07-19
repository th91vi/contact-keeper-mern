import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactState from '../../context/contact/ContactState'

const Home = () => {
    return (
        <div className="grid-2">
            <div></div>
            <div>
                <Contacts />
            </div>
        </div>
    )
}

export default Home
