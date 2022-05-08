import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css';

function AuthNav() {
    return (
        <>
            <nav>                
                <NavLink exact to='/register' className={s.link} activeClassName={s.activeLink}>Register</NavLink>
                <NavLink to='/login' className={s.link} activeClassName={s.activeLink}>Login</NavLink>
            </nav>
        </>
    )
}

export default AuthNav;