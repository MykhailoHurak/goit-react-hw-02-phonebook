import css from './Contact.module.css';

function Contact({ id, name, number }) {
    return (
        <li className={css.Contact}>
            {name + ': ' + number}
            <button className={css.Contact__button}>
                Delete
            </button>
        </li>
    );
}

export default Contact;