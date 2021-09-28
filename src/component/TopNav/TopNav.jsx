import React from 'react';
import { Link } from 'react-router-dom';
import { notification } from '../Datas/notification';
import Dropdown from './Dropdown/Dropdown';
import './topnav.scss';
import user_image from '../assets/home.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/Actions.js/Actions';

const curr_user = {
    display_name: 'Tuat Tran',
    image: user_image
}
const languages = ['EN', 'RU', 'UZ'];

const renderUserToggle = (user) => (
    <div className="topnav__user">
        <div className="topnav__user-img">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__user-name d_sm-none">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' className="notification__item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </Link>
)

const renderNotificationItem = (item, index) => (
    <div className={`notification__item`} key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const TopNav = () => {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme);
    const data = useSelector(state => state.data);

    const renderLanguage = (item, index) => (
        <div className='notification__item' key={index}>
            <span className={`language`} onClick={() => dispatch(setLanguage(item))}>{item}</span>
        </div>
    )

    return (
        <div id='topnav' className={theme.mode}>
            <div className="topnav__search">
                <input type="text" placeholder={data.input} />
                <i className='fas fa-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={data.userMenu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__item">
                    <Dropdown
                        icon='far fa-bell'
                        badge='12'
                        contentData={notification.uz}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>
                <div className='topnav__item'>
                    <Dropdown 
                    icon={'fas fa-language'}
                    contentData={languages}
                    renderItems={(item, index) => renderLanguage(item, index)} />
                </div>
                <div className='topnav__item'></div>
            </div>
        </div>
    )
}

export default TopNav;
