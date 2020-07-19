import React from 'react';
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '} <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')} style={{textTransform:"capitalize", float:"right"}}>{type}</span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fa fa-envelope-open"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fa fa-phone"></i> {phone}
                    </li>
                )}
            </ul>
            <button className="btn btn-dark btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem
