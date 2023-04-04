import { Link, NavLink } from "react-router-dom";

import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : ''} to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}