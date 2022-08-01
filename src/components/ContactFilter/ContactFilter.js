import css from './ContactFilter.module.css';

function ContactFilter() {
    return (
        <div className={css.ContactFilter}>
            <h3 className={css.ContactFilter__title}>ContactFilter</h3>
            <p>Find contacts by name</p>
            <input
                type="text"
                className={css.ContactFilter__input}
            />
        </div>
    )
}

export default ContactFilter;