import React from 'react';
import FolderBlock from "./FolderBlock";
import IconBlock from "./IconBlock";


const ImageContent = ({ content }: any) => {
    return (
        <div className='image-content'>
            <h1>TEST</h1>
            <p>{JSON.stringify(content)}</p>
            {
                content.map((item: any) => {
                    item.type === 'Folder'
                        ? <FolderBlock />
                        : <IconBlock />
                })
            }
        </div>
    );
};

export default ImageContent;
