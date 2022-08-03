import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <div className={css.ContactList}>
            <ul>
                {contacts().map(contact => {
                    return (
                        <Contact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            onDeleteContact={onDeleteContact}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ContactList;