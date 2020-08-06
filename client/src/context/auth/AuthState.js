import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Load user
    const loadUser = async () => {
        // @todo - load token into global headers

        try {
            const res = await fetch('/api/auth');

            if (!res.ok) {
                const data = await res.json()
                throw data;
            }

            const data = res.json();

            dispatch({
                type: USER_LOADED,
                payload: data
            })

            loadUser();

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
            })
        }
    }

    // Register User
    const registerUser = async (formData) => {
        const config = new Headers({
            "Content-Type": "application/json"
        })

        try {
            const res = await fetch('/api/users', {
                method: "POST",
                headers: config,
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                const data = await res.json()
                throw data;
            }

            const data = await res.json()

            dispatch({
                type: REGISTER_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.msg || err.errors[0].msg
            })
        }
    }

    // Login user
    const loginUser = () => console.log('loginUser')

    // Logout
    const logoutUser = () => console.log('logoutUser')

    // Clear errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                loadUser,
                registerUser,
                loginUser,
                logoutUser,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;