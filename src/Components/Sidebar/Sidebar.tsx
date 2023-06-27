import React from "react";
import "./Sidebar.css";
import SidebarTile from "./SidebarTile";

import {faChartPie, faTrafficLight, faTv, faUserGear, faGears, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
interface SidebarProps {
    title: String;
}

const Sidebar: React.FC<SidebarProps> = ({title}) => {
    return (
        <div className={'sidebar-layout'}>
            <img src={'/trafficLogo.png'}/>
            <div className={'sidebar-links'}>
                <SidebarTile isActive={title==='Statistics'} title={'Statistics'} icon={faChartPie} linkTo={'/statistics'}/>
                <SidebarTile isActive={title==='Intersection'} title={'Intersection'} icon={faTrafficLight} linkTo={'/intersection'}/>
                <SidebarTile isActive={title==='Live Feed'} title={'Live Feed'} icon={faTv} linkTo={'/livefeed'}/>
                <SidebarTile isActive={title==='Admin'} title={'Admin'} icon={faUserGear} linkTo={'/admin'}/>
                <SidebarTile isActive={title==='Settings'} title={'Settings'} icon={faGears} linkTo={'/settings'}/>
                <SidebarTile isActive={title==='Signout'} title={'Signout'} icon={faArrowRightFromBracket} linkTo={'/signout'}/>
            </div>
        </div>
    );
}

export default Sidebar;