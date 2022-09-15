import React from 'react';
import {ExampleApi} from "../App/helpers/exmpleApi";
import ImageContent from "../Components/ImageContent";


const Prodengi = () => {
    const content = ExampleApi;
    return (
        <div>
            <h1>PRODENGI</h1>
            <ImageContent content={content}/>
        </div>
    );
};

export default Prodengi;
