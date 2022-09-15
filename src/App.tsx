import React, {useState} from 'react';
import './App.scss';
import LayoutHeader from "./Layouts/LayoutHeader";
import Prodengi from "./Pages/Prodengi";
import Tengeda from "./Pages/Tengeda";

const listLinks = [
    {
        title: 'Проденьги',
        component: 'Prodengi',
    },
    {
        title: 'ТенгеДа',
        component: 'TengeDa',
    },
];


function App() {

    let [activeComponent, setActiveComponent] = useState(listLinks[0])

    return (
        <div className="main">
            <LayoutHeader links={listLinks} active={activeComponent} setActive={setActiveComponent}/>
            <div className="main__content">
                {
                    activeComponent.component === 'Prodengi'
                        ? <Prodengi/>
                        : <Tengeda/>
                }
            </div>
        </div>
    );
}

export default App;
