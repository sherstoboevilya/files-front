import React from 'react';
import './IconBlock.scss'

const IconBlock = ({content, setModal}: any) => {
    function concatModalOptions() {
        return {
            type: 'ModalMore',
            content: content,
        }
    }
    return (
        <div className="icon">
            <img
                className='icon__image'
                src={content[Object.keys(content)[0]]}
                alt="Изображение"
            />
                <button
                    className='icon__more'
                    onClick={() => setModal(concatModalOptions())}
                >
                    Выбрать
                </button>
        </div>
    );
};

export default IconBlock;
