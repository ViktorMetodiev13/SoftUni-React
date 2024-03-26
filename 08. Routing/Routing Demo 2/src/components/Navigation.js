import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </nav>
    );
};