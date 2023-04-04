import { Link, NavLink } from "react-router-dom";

import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><NavLink style={({isActive}) => ({color: isActive? "green" : "white"})} to="/">Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive? "green" : "white"})} to="/">Home</NavLink></li>
            </ul>
        </nav>
    )
}