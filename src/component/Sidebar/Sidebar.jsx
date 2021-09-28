import React, { useRef } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const SidebarItem = props => {
    const theme = useSelector(state => state.theme);
    const active = props.active ? `active ${theme.theme}`:'';

    return(
        <div className={`sidebar__item`}>
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

const clickSidebarRef = (content_ref, toggle_ref) => {
    window.addEventListener('mousedown', e => {
        if(toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('show');
            toggle_ref.current.classList.toggle('fa-chevron-right');
        }
        else{
            if(content_ref.current){
            content_ref.current.classList.remove('show');
            toggle_ref.current.classList.add('fa-chevron-right')
            }
        }
    })
}

const Sidebar = (props) => {

    const theme = useSelector(state => state.theme);
    const data = useSelector(state => state.data);
    const activeItem = data.sidebar.findIndex(item => item.route === props.location.pathname);

    const sidebarContentRef = useRef(null);
    const sidebarToggleRef = useRef(null);

    clickSidebarRef(sidebarContentRef, sidebarToggleRef)

    return (
        <div className={`sidebar ${theme.mode}`} ref={sidebarContentRef}>
            <div className='sidebar__logo'>
                <i className="fas fa-chevron-right" ref={sidebarToggleRef}></i>
                <img src={logo} alt="logo" />
            </div>
            {data.sidebar.map((item, index) => (
                <Link to={item.route} key={index}>
                    <SidebarItem
                    icon={item.icon}
                    title={item.display_name}
                    active={index === activeItem} />
                </Link>
            ))}
        </div>
    )
}

export default Sidebar
