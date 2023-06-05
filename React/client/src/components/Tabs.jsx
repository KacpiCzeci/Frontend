import store from "../store/store.js";
import TodoTab from "./TodoTab";
import DoneTab from "./DoneTab";
import { useSelector } from "react-redux";
import './Tabs.css';

export default function Tabs() {
    const tabConfig = [
        { id: 1, label:"To do", tab: <TodoTab key={1}/> },
        { id: 2, label:"Done", tab: <DoneTab key={2}/> }
    ];

    const activeTab = useSelector((state) => state.activeTab);
    
    const setActiveTab = (tab) => {
        store.dispatch({ type: "setActiveTab", content: tab });
    };

    return(
        <div className="bg-white">
            <div className="sticky top-[70px] z-50 bg-white border-b border-teal-500">
                <ul className="flex flex-row flex-nowrap -mb-px text-sm font-medium text-center text-teal-500">
                    {
                        tabConfig.map((currentTab, index) => {
                            console.log(activeTab === currentTab.id, currentTab.label);
                            return(
                                <li key={currentTab.id} className="w-full mr-2">
                                    <button onClick={() => setActiveTab(currentTab.id)} className={`${activeTab === currentTab.id ? 'active' : 'inactive'} flex w-full justify-center p-4 border-b-4 rounded-t-lg hover:text-teal-300`}>
                                        { currentTab.label }
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="w-full">
                {
                    tabConfig.map((currentTab, index) => {
                        if(currentTab.id === activeTab) {
                            return currentTab.tab;
                        }
                        return null;
                    })
                        
                }
            </div>
        </div>
    );
}
