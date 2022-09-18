import React from 'react';
import UiRadio from "./Ui/UiRadio";
import './ImageSize.scss'

// @ts-ignore
const ImageSize = ({content, change}) => {
    if (!content) {
        return null
    }

    return (
        <div className="size">
            <h3 className="size__title">
                Размер изображения
            </h3>
            {
                Object.keys(content).map(item => {
                    return <UiRadio
                        key={item}
                        name='Размер'
                        id={item}
                        value={content[item]}
                        label={item}
                        change={change}
                    />
                })
            }
        </div>
    );
};

export default ImageSize;
