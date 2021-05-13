import React from 'react';

import styles from './styles.module.scss';

interface SubscribeButtonProps{
    priceId: string;
}

const SubscribeButton:React.FC<SubscribeButtonProps> = ({priceId}) =>(
    <button
        type='button'
        className={styles.buttonContainer}
    >
        Subscribe now
    </button>
)

export default SubscribeButton;