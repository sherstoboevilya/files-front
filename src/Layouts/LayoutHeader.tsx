import React from 'react';
import NavLink from "../Components/Ui/Nav/NavLink";
import {navLinkInterface} from "../Services/Interfaces/Layout";
import './LayoutHeader.scss'

export interface childInterface {
    active: navLinkInterface,
    links: navLinkInterface[],
    setActive: any,
}

const LayoutHeader = ({ active, links, setActive }: childInterface) => {
    return (
        <header className='layout-header'>
            <ul className='layout-header__links'>
                { links.map((item: navLinkInterface) =>
                    <NavLink active={active} key={item.component} component={item.component} title={item.title} setActive={() => setActive(item)}/>
                )}
            </ul>
        </header>
    );
};

export default LayoutHeader;
