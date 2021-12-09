import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <Link to="/mylist">
                <li>My List</li>
                </Link>
                <li>Login</li>
                <li>Register</li>
            </ul>
            <hr />
        </div>
    )
}

export default Header;
