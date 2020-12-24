import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
      <div className={'row m-0 p-0 justify-content-center align-items-center'} style={{height: '100vh'}}>
        <div className={'col-10 col-md-6 col-lg-4 col-xl-3 p-0 m-0 text-center'}>
            <h1 className={'text-center text-white'} style={{borderBottom: '2px solid white'}}>
                Join&nbsp;
                <GitHubButton href="https://github.com/sami-colom" data-color-scheme="no-preference: light; light: light; dark: light;" aria-label="Follow @sami-colom on GitHub">Follow @sami-colom</GitHubButton>
                &nbsp;
                <GitHubButton href="https://github.com/sami-colom/react-chat-app/fork" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" aria-label="Fork sami-colom/react-chat-app on GitHub">Fork</GitHubButton>
            </h1>
            <div className={'p-0 m-0 w-100 my-3'}>
                <input className={'form-control w-100'} type={'text'} placeholder='Name' onChange={(event) => setName(event.target.value)} />
            </div>
            <div className={'p-0 m-0 w-100 my-3'}>
                <input className={'form-control w-100'} type={'text'} placeholder='Room' onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type={'submit'} className={'btn btn-primary text-center text-white w-100'}>Sign In</button>
            </Link>
        </div>
      </div>
  )
};

export default  Join;
