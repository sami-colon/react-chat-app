import React from "react";
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(message.user === trimmedName){
        isSentByCurrentUser = true;
    }

    return isSentByCurrentUser ?
        (
        <div className={'row p-0 m-0 pt-1 text-right'}>
            <div className={'col-2 p-0 m-0'} />
            <div className={'col-10 p-0 m-0 px-2'}>
                    <p className={'p-2 m-0 d-inline-block'} style={{borderRadius: '10px', backgroundColor: '#34B7F1'}}>{ReactEmoji.emojify(message.text)}</p>
            </div>
        </div>
        ) :
        message.user.toLowerCase() === 'admin'  ?
            (
                <div className={'row p-0 m-0 pt-1 text-left'}>
                    <div className={'col-12 p-0 m-0 px-2 text-center'}>
                        <p className={'p-1 m-0 d-inline-block'} style={{backgroundColor: 'ghostwhite'}}>{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            ) :
            (
                <div className={'row p-0 m-0 pt-1 text-left'}>
                    <div className={'col-10 p-0 m-0 px-2'}>
                        <p className={'p-2 m-0 d-inline-block'} style={{borderRadius: '10px', backgroundColor: 'floralwhite'}}>{ReactEmoji.emojify(message.text)}</p>
                    </div>
                    <div className={'col-2 p-0 m-0 pt-3'}>
                        {/*<p>{message.user}</p>*/}
                    </div>
                </div>
            );
};

export default Message;
