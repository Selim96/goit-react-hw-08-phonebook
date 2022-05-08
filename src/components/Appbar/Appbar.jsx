import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import s from './Appbar.module.css';

export default function Appbar() {
    return <>
        <header className={s.header}>
            <Navigation />
            <AuthNav />
            <UserMenu/>
        </header>
    </>
}