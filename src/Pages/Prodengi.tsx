import React from 'react';
import {ExampleApi} from "../App/helpers/exmpleApi";
import ImageContent from "../Components/ImageContent";


// @ts-ignore
const Prodengi = ({setModal}) => {
    const content = ExampleApi;
    return (
        <div>
            <ImageContent setModal={setModal} content={content}/>
        </div>
    );
};

export default Prodengi;
