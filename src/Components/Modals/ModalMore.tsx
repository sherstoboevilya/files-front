import React, {useState} from 'react';
import './ModalMore.scss'
import ImageSize from "../ImageSize";

// @ts-ignore
const ModalMore = ({ content }) => {
    let [activeSize, setActiveSize] = useState(null);
    if (!content) {
        return null;
    }
    function setSize() {
    }
    function copySize (val: any) {
        console.log('val: ', val);
        navigator.clipboard.writeText(val).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    return (
        <div className='more'>
            <img
                src={content[Object.keys(content)[0]]}
                alt="Изображение"
                className="more__image"
            />
            <div className='more__content'>
                <ImageSize
                    change={copySize}
                    content={content}
                />
                <div className="more__navigation">
                    <button onClick={copySize}>Скопировать</button>
                </div>
            </div>
        </div>
    );
};

export default ModalMore;
