import React from 'react';
import {navLinkInterface} from "../../../Services/Interfaces/Layout";
import "./NavLink.scss"

interface navLink extends navLinkInterface {
    setActive: any,
    active: navLinkInterface,
}

const NavLink = ({title, component, setActive, active}: navLink) => {
    return (
        <li className={`link ${active.component === component ? 'link_active' : ''}`}>
            <button onClick={() => setActive(component)} className='link__button' >
                { title }
            </button>
        </li>
    );
};

export default NavLink;
