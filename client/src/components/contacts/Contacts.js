import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Contacts = () => {
    const { contacts, filtered } = useContext(ContactContext);

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {
                    filtered !== null ? filtered.map(contact =>
                        <CSSTransition key={contact.id} classNames='item' timeout={500}>
                            <ContactItem contact={contact} />
                        </CSSTransition>) :
                        contacts.map((contact) =>
                            <CSSTransition key={contact.id} classNames='item' timeout={500}>
                                <ContactItem key={contact.id} contact={contact} />
                            </CSSTransition>)
                }
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts;
