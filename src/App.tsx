import React, {useState} from 'react';
import './App.scss';
import LayoutHeader from "./Layouts/LayoutHeader";
import Prodengi from "./Pages/Prodengi";
import Tengeda from "./Pages/Tengeda";
import ModalMain from "./Components/Modals/ModalMain";

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
    let [activeModal, setActiveModal] = useState(null);
    let [activeComponent, setActiveComponent] = useState(listLinks[0]);

    function closeModal() {
        setActiveModal(null)
    }

    return (
        <div className="main">
            <LayoutHeader links={listLinks} active={activeComponent} setActive={setActiveComponent}/>
            <div className="main__content">
                {
                    activeComponent.component === 'Prodengi'
                        ? <Prodengi setModal={setActiveModal} />
                        : <Tengeda />
                }
            </div>
            <ModalMain options={activeModal} close={closeModal} />
        </div>
    );
}

export default App;
