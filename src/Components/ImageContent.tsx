import React from 'react';
import FolderBlock from "./FolderBlock";
import IconBlock from "./IconBlock";
import "./ImageContent.scss";
import {generateKey} from "../App/helpers/generateKey";

const ImageContent = ({ content, setModal }: any) => {
    const myKeys = generateKey(content);
    return (
        <div className='image-content'>
            {
                content.map((item: any, index: number) => {
                    return item.type === 'Folder'
                        ? <FolderBlock key={myKeys[index]} />
                        : <IconBlock
                            key={myKeys[index]}
                            setModal={setModal}
                            content={item.src}
                        />
                })
            }
        </div>
    );
};

export default ImageContent;
