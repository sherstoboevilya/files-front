import React from 'react';
import './ModalMain.scss'
import ModalMore from "./ModalMore";

// @ts-ignore
const ModalMain = ({options, close}) => {
    if (!options) {
        return null;
    }
    const Components = {
        ModalMore,
    } as any;

    return (
        <div className='modal'>
            <div className="modal__content">
                <button className='modal__close' onClick={() => close()}>X</button>
                { React.createElement(Components[options.type], {content: options.content}) }
            </div>
        </div>
    );
};

export default ModalMain;
