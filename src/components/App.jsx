import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Container from '../container';
import Appbar from './Appbar';
const HomePage = lazy(() => import("./HomePage" /*webpackChankName: "home-view" */));
const ContactsPage = lazy(() => import("./ContactsPage"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
// import { Oval } from 'react-loader-spinner';
// import { getLoader } from 'redux/contacts/contacts-selectors';

function App() {  
  return <>
    <Container>
      <Appbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>

          <Route  path="/contacts">
            <ContactsPage/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
          
        <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
</>
}

// ===============================================
// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   }

//   componentDidMount() {
//     // запись тестового списка в локал сторедж
//     // localStorage.setItem('contacts', JSON.stringify(defaultData));

//     const savedContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(savedContacts);

//     if (parsedContacts) {
//       return this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('updated!!!!!!');

//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitData = (data) => {
//     const objName = {
//         id: nanoid(),
//         name: data.name,
//         number: data.number,
//         }
    
//     this.setState(p => (
//       { contacts: [objName, ...p.contacts], }));
//   }

//   filterChange = e => {
//     this.setState({ filter: e.currentTarget.value });
//   }

//   toDoFilter = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
//   }

//   checkFunction = (name) => {
//     return this.state.contacts.some(v => v.name.toLowerCase() === name.toLowerCase()); 
//   }

//   toDeleteContact = (id) => {
//     this.setState(p => ({
//       contacts: p.contacts.filter(e => e.id !== id)
//     }))
//   };

//   render() {
//     const contactsArr = this.toDoFilter();
    
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitData} check={this.checkFunction} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.filterChange}/>
//         <ContactList contacts={contactsArr} toDelete={this.toDeleteContact}/>
//     </div>
//     )
    
//   };
// };

export default App;