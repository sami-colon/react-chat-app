import React from 'react';

const InfoBar = ({room}) => {
    return (
        <div className={'row p-0 m-0 bg-primary text-white py-2 px-2'} style={{fontSize: '0.75rem'}}>
            <div className={'col-1 col-md-1 text-left p-0 m-0 mt-2'}>
                <i className="fa fa-circle" style={{color: 'deepskyblue'}}/>
            </div>
            <div className={'col-10 col-md-10 text-left p-0 m-0'}>
                <h3 className={'d-inline p-0 m-0'}>{room}</h3>
            </div>
            <div className={'col-1 col-md-1 text-right p-0 m-0'}>
                <a href={'/'} style={{textDecoration: 'none', color: 'inherit'}}>
                    <i className="fa fa-sign-out" style={{fontSize: '2rem'}}/>
                </a>
            </div>
        </div>
    )
};

export default InfoBar;
