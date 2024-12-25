import React from "react"
import { Link } from "react-router-dom"
const Header =()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/create-user'>Create User</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header