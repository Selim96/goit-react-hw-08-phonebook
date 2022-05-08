import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export default function Navigation() {
    return (
        <>
            <nav>                
                <NavLink exact to='/' className={s.link} activeClassName={s.activeLink}>Home</NavLink>
                <NavLink to='/contacts' className={s.link} activeClassName={s.activeLink}>Phonebook</NavLink>
            </nav>
        </>
    )
}