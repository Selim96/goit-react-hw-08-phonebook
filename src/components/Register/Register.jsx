import { useState } from 'react';
import s from './Register.module.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
        
        case 'email':
        setEmail(e.currentTarget.value);
        break;
      
      case 'password':
        setPassword(e.currentTarget.value);
        break;
    
      default:
        break;
    }
    };
    
    const handlSubmit = e => {
    e.preventDefault();
    //   if () {
        
    //     return;
    // };
    // createContacts();
      // dispatch(addContact(formOutput));
        setName('');
      setEmail('');
      setPassword('');    
    }

    return <>
        <form onSubmit={handlSubmit}>
            <label>
                <input
                    type='text'
                    name="name"
                    className={s.formInput}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder='Enter name'
                    value={name}
                    onChange={handlChange}
                />
            </label>
            <label>
                <input
                    type='text'
                    name="email"
                    className={s.formInput}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder='Enter email'
                    value={email}
                    onChange={handlChange}
                />
            </label>
            <label>
                <input
                    type="password"
                    name="password"
                    className={s.formInput}
                    required
                    placeholder='Enter password'
                    value={password}
                    onChange={handlChange}
                />
            </label>
            <button type='submit'>Sign up</button>
        </form>
    </>
}

export default Register;