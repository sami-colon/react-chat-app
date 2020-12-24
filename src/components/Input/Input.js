import React from 'react';

const Input = ({ message, sendMessage, setMessage }) => {
    return (
        <div className="input-group input-group-lg">
            <input type={'text'} value={message}
                   className={'form-control'}
                   onChange={(event) => setMessage(event.target.value)}
                   onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                   style={{borderRadius: '0'}}
            />
            <button className="input-group-addon btn btn-primary" style={{borderRadius: '0'}} onClick={(event) => sendMessage(event)}>
                <i className="fa fa-paper-plane"/>
            </button>
        </div>
    )
};

export default Input;
