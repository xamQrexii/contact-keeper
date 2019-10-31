import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {

    const contactContext = useContext(ContactContext);
    const { addContact, clearCurrent, current, updateContact } = contactContext;

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current]);

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });
    
    const clearAll = () => clearCurrent();

    const onSubmit = e => {

        e.preventDefault();

        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll(); 
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} required />
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} required />
            <input type='text' placeholder='Phone' name='phone' value={phone} onChange={onChange} required />

            <h5>Contact Type</h5>
            <input type='radio' name='type' id='personal' value={'personal'} checked={type === 'personal'} onChange={onChange} />
            <label htmlFor='personal' style={{ margin: '0px 5px' }}>Personal</label>
            <input type='radio' name='type' id='professional' value={'professional'} checked={type === 'professional'} onChange={onChange} />
            <label htmlFor='professional' style={{ margin: '0px 5px' }}>Professional</label>

            <div>
                <input type='submit' value={current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block' />
            </div>
            <div>
                {current && <button className='btn btn-ligh btn-block' onClick={clearAll}>Clear</button> }
            </div>
        </form>
    )
}

export default ContactForm
