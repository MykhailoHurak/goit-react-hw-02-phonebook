import React from 'react';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
    // state = {};
    render() {
        return (
            // <div>ContactForm</div>

            <div className={css.ContactForm}>
                <h3 className={css.ContactForm__title}>ContactForm</h3>
                <form>
                    <label className={css.ContactForm__label}>
                        Name
                        <input
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                             className={css.ContactForm__input}
                        />
                    </label>
                    <br />
                    <label className={css.ContactForm__label}>
                        Phone
                        <input
                            type="tel"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                             className={css.ContactForm__input}
                        />
                    </label>
                    <br />
                    <button
                        type="submit"
                        className={css.ContactForm__button}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ContactForm;