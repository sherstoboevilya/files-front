import React from 'react';
import './FolderBlock.scss'

const FolderBlock = () => {
    return (
        <div className='folder'>
            <img
                className='folder__image'
                src="https://cdn-icons-png.flaticon.com/512/716/716784.png"
                alt="Папка"
            />
            <div className='folder__content'>
                <p className='folder__name'>Название папки</p>
            </div>
        </div>
    );
};

export default FolderBlock;
