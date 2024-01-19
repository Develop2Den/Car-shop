import React from 'react';
import styles from './ErrorPage.module.scss';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className={styles.ErrorPage}>
            <h2 className="h2">Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
