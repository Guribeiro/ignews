import React, { useState } from 'react';
import styles from './styles.module.scss';
import { signIn, useSession, signOut } from 'next-auth/client';

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';

const SignInButton: React.FC = () => {

    const [session] = useSession();

    console.log(session)

    return session ? (
        <button
            onClick={() => signOut()} 
            className={styles.signInButton}
            >
            <FaGithub color='#27ae60' />
            {session.user.name}
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) :
        (
            <button
                onClick={() => signIn('github')}
                className={styles.signInButton}
            >
                <FaGithub color='#eba417' />
            Sign in with github
            </button>
        )
}

export default SignInButton;