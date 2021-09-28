import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBgColor, setBgColorHover, setBgMode } from '../../redux/Actions.js/Actions';
import './setting.scss';

const mode_settings = [
    {
        name: 'light',
        background: 'light-background',
    },
    {
        name: 'dark',
        background: 'dark-background',
    }  
]

const color_settings = [
    {
        name: 'blue',
        background: 'blue-color',
        backgroundHover: 'blue-color-hover'
    },
    {
        name: 'red',
        background: 'red-color',
        backgroundHover: 'red-color-hover'
    },
    {
        name: 'cyan',
        background: 'cyan-color',
        backgroundHover: 'cyan-color-hover'
    },
    {
        name: 'green',
        background: 'green-color',
        backgroundHover: 'green-color-hover'
    },
    {
        name: 'orange',
        background: 'orange-color',
        backgroundHover: 'orange-color-hover'
    }
]

const Setting = () => {

    const dispatch = useDispatch();

    const theme = useSelector(state => state.theme)
    const data = useSelector(state => state.data);

    const [currMode, setCurrMode] = useState(theme.mode === undefined ? 'light-background': theme.mode);
    const [currColor, setCurrColor] = useState(theme.theme === undefined ? 'blue-color':theme.theme);

    const setMode = mode => {
        setCurrMode(mode.background);
        dispatch(setBgMode(mode.background));
    }

    const setColor = color => {
        setCurrColor(color.background);
        dispatch(setBgColor(color.background));
        dispatch(setBgColorHover(color.backgroundHover));
    }

    return (
        <div className='settings container-fluid'>
            <h2 className="page-header">{data.pages.setting}</h2>
            <div className="row">
                <div className="col-12 mode">
                    <h5>{data.chooseMode}</h5>
                    <ul>
                    {
                        mode_settings.map((item, index) => (
                            <li key={index} onClick={() => setMode(item)}>
                                <span className={`${item.background} ${item.background===currMode ? 'active':''}`}>
                                    <i className="fas fa-check"></i>
                                </span> 
                                {item.name}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="col-12 color">
                    <h5>{data.chooseColor}</h5>
                    <ul>
                        {
                            color_settings.map((item, index) => (
                                <li key={index} onClick={() => setColor(item)}>
                                    <span className={`${item.background} ${item.background===currColor ? 'active':''}`}>
                                        <i className="fas fa-check"></i>
                                    </span>
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Setting;
