import React from "react";
import { Link, useNavigate } from "react-router-dom"
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("user");
        navigate("/signup");
    }

    return (
        <div>
            <img src ="/img/logo.jpg" className="logo" alt="" />
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li onClick={logOut}><Link to="/logout">Logout ({JSON.parse(auth).name})</Link></li>
            </ul> :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;