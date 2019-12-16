import React from 'react';
import './contacts.css';
import Title from "../title/title";

const Contacts = () => {
    return (
        <div className='text-center'>
            <Title className='m-3' little>You can contact me at these addresses:</Title>
            <p>My <a href="https://mail.google.com/mail/u/0/#inbox">gmail</a></p>
            <p>My <a href="https://e.mail.ru/messages/inbox/?back=1">amail</a></p>
            <a href="skype:+996550056643?call">Call Me</a>
        </div>
    );
};

export default Contacts;