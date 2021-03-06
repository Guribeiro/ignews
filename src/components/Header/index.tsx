import React from 'react';
import styles from './styles.module.scss';

import SignInButton from '../SignInButton';

const Header:React.FC = () =>{
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo ignews" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}

export default Header;