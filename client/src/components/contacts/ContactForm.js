import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {

    const { addContact } = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {

        e.preventDefault();
        addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
        
    }

    console.log(contact)

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>Add Contact</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} />
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
            <input type='text' placeholder='Phone' name='phone' value={phone} onChange={onChange} />

            <h5>Contact Type</h5>
            <input type='radio' name='type' id='personal' value={'personal'} checked={type === 'personal'} onChange={onChange} />
            <label htmlFor='personal' style={{ margin: '0px 5px' }}>Personal</label>
            <input type='radio' name='type' id='professional' value={'professional'} checked={type === 'professional'} onChange={onChange} />
            <label htmlFor='professional' style={{ margin: '0px 5px' }}>Professional</label>

            <div>
                <input type='submit' value='Add Contact' className='btn btn-primary btn-block' />
            </div>
        </form>
    )
}

export default ContactForm
