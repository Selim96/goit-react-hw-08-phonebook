import React from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function ContactsPage() {  
  return <>
  <h1>Phonebook</h1>
    <ContactForm />
    <div className='contactsHeader'>
      <h2 className='contactsTitle'>Contacts</h2>
    </div>
      <Filter />
      <ContactList />
</>
};

export default ContactsPage;