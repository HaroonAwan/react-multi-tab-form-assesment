import Book from "./Book/index.jsx";
import FlightStatus from "./FlightStatus/index.jsx";
import CheckIn from "./CheckIn/index.jsx";
import MyTrips from "./MyTrips/index.jsx";
import {useState} from "react";

const MultiTabForm = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = {
        'Book': <Book/>,
        'Flight status': <FlightStatus/>,
        'Check-in': <CheckIn/>,
        'My trips': <MyTrips/>,
    }


    return (
        <div className='bg-white rounded-[10px] h-fit min-h-[550px] w-[580px] overflow-hidden'>
            <div className='flex justify-around w-full gap-px'>
                {Object.keys(tabs).map((tab, index) => (
                    <div
                        key={index}
                        className={`text-base font-normal py-4 flex items-center justify-center cursor-pointer flex-1 h-[48px] ${activeTab === index ? 'bg-white' : 'bg-[#072243] text-white'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        <span>{tab}</span>
                    </div>
                ))}
            </div>
            <div className='py-[14px] px-[24px]'>
                {tabs[Object.keys(tabs)[activeTab]]}
            </div>
        </div>
    );
};

export default MultiTabForm;
