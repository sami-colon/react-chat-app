import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from "../Message/Message";
import './MessageBox.css';

const MessageBox = ({ messages, name }) => {
    return (
        <ScrollToBottom className={'box'}>
            {messages.map((message, i) => <div key={i} className={'text-dark'}><Message name={name} message={message} /></div>)}
        </ScrollToBottom>
    )
};

export default MessageBox;
