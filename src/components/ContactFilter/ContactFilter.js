import css from './ContactFilter.module.css';

function ContactFilter({filter, onFilter}) {
    return (
        <div className={css.ContactFilter}>
            <p>Find contacts by name</p>
            <input
                type="text"
                className={css.ContactFilter__input}
                value={filter}
                onChange={onFilter}
            />
        </div>
    )
}

export default ContactFilter;