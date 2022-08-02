import React from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = ({name, number}) => {
    // console.log(name);
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  render() {
    return (
      <div className={css.Phonebook}>
        <h1 className={css.Phonebook__title}>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />

        <h2 className={css.Phonebook__title}>Contacts</h2>
        <ContactFilter />
        <ContactList
          contacts={this.state.contacts}
        />
      </div>
    )
  }
}

export default App;


// ============================================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
