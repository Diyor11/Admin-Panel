import React from 'react';
import { useSelector } from 'react-redux';
import './statuscards.scss';

const StatusCards = (props) => {

    const theme = useSelector(state => state.theme);

    return (
        <div className={`status__card ${theme.mode}`}>
            <div className={`before ${theme.theme}`}></div>
            <div className="status__card-icon">
                <i className={props.icon}></i>
            </div>
            <div className="status__cards-info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCards
