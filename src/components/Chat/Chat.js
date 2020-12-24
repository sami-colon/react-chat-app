import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ENDPOINTS from "../../ENDPOINTS";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import MessageBox from "../MessageBox/MessageBox";
import GitHubButton from "react-github-btn";

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // mount and update function
        const { name, room } = queryString.parse(location.search);
        setRoom(room); setName(name);

        socket = io(ENDPOINTS.SOCKET_IO_URL_LOCAL);
        socket.emit('join', {name, room}, () => {});

        // unmount function
        return () => {
            socket.emit('disconnect');
        }
    }, [location.search]); // update will only re render if this array data changes.

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className={'row p-0 m-0 justify-content-center align-items-center'}  style={{height: '100vh'}}>
            <div className={'col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 p-0 m-0 text-center'} style={{border: '1px solid #007bff'}}>
                <div>
                    &nbsp;
                    <GitHubButton href="https://github.com/sami-colom" data-color-scheme="no-preference: light; light: light; dark: light;" aria-label="Follow @sami-colom on GitHub">Follow @sami-colom</GitHubButton>
                    &nbsp;
                    <GitHubButton href="https://github.com/sami-colom/react-chat-app/fork" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" aria-label="Fork sami-colom/react-chat-app on GitHub">Fork</GitHubButton>
                </div>
                <InfoBar room={room} />
                <div style={{backgroundColor: '#ECE5DD'}}>
                    <MessageBox messages={messages} name={name} />
                </div>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default  Chat;
