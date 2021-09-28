import React, { useRef, useEffect} from 'react'
import { useSelector } from 'react-redux'

import './dropdown.scss'

const clickOutsideRef = (content_ref, toggle_ref) => {

    document.addEventListener('mousedown', (e) => {
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active');
        }
        else if (content_ref.current && !content_ref.current.contains(e.target)) {
            content_ref.current.classList.remove('active');
        } 
    })
}

const Dropdown = props => {

    const theme = useSelector(state => state.theme);

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    useEffect(() => {
        clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
    }, [])
    
    return (
        <div className={`dropdown ${theme.mode}`}>
            <button ref={dropdown_toggle_el} className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className={`dropdown__toggle-badge ${theme.theme}`}>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown_content_el} className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.footer ? (
                        <div className="dropdown__footer">
                            {props.footer}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown