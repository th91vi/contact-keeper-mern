import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext)

    const { isAuthenticated, logoutUser, user } = authContext;

    const onLogout = () => {
        logoutUser()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout}>
                    <i className="fa fa-sign-out"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    useEffect(() => {

    }, [isAuthenticated])


    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fa fa-id-card'
}

export default Navbar
