import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Login = ({ visible, setVisible }) => {

    return (
        <div>
            <p onClick={() => setVisible(!visible)}><FontAwesomeIcon className="xmark" icon={faXmark} style={{color: "#ffffff",}} /></p>
        </div>
    );
};

export default Login;

