import {useState} from "react";

import Flight from "./Flight/index.jsx";
import Package from "./Package/index.jsx";
import Hotel from "./Hotel/index.jsx";
import Car from "./Car/index.jsx";
import {Icon} from "@iconify/react";

const Book = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = {
        'Flight': {
            type: 'component',
            component: <Flight/>,
        },
        'Packages': {
            type: 'component',
            component: <Package/>,
        },
        'Hotel': {
            type: 'component',
            component: <Hotel/>,
        },
        'Car': {
            type: 'component',
            component: <Car/>,
        },
        'Cruise': {
            type: 'link',
            link: 'https://www.google.com/search?q=cruise',
            icon: <Icon icon="cil:external-link"/>
        },
    }

    return (
        <div className='w-full'>
            <div className='flex w-full mb-3 border-b border-[#bcbcbc]'>
                {Object.entries(tabs).map(([tab_title, tab], index) => {
                    return (
                        tab.type === 'component' ?
                            <div
                                key={index}
                                className={`cursor-pointer flex-1 text-center pb-1 border-b-[2px] font-semibold text-[12px] ${activeTab === index ? 'text-black border-black' : 'text-[#616161] border-transparent'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab_title}
                            </div> :
                            <a
                                key={index}
                                href={tab.link}
                                target='_blank'
                                rel='noreferrer'
                                className={`cursor-pointer flex items-center pb-1 gap-2 flex-1 justify-center font-semibold text-sm`}
                            >
                                <span>{tab_title}</span>
                                {tab.icon}
                            </a>
                    );
                })}
            </div>
            <div>
                {tabs[Object.keys(tabs)[activeTab]].type === 'component' && tabs[Object.keys(tabs)[activeTab]].component}
            </div>
        </div>
    );
};

export default Book;
