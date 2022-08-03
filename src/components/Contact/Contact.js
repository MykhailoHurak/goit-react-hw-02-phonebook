import css from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
    return (
        <li className={css.Contact}>
            {name + ': ' + number}
            <button
                className={css.Contact__button}
                onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;