import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login", { replaced: true });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MovieApp</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/top10">Top10</Link>
                        <Link className="nav-link" to="/trending">Trending</Link>
                    </div>
                </div>
                <ul className="navbar-collapse justify-content-end">
                    <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
                </ul>
            </div>
        </nav>
    )
}
