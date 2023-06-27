import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarTile.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface SidebarTileProps {
    title: string;
    icon: any;
    linkTo: string;
    isActive: boolean;
}

const SidebarTile: React.FC<SidebarTileProps> = ({title, icon, linkTo, isActive}) => {
    const tileStyle: React.CSSProperties = {
        color: isActive ? "#757575" : "#FFF" // Change color based on isActive prop
    };

    return (
        <Link to={`${linkTo}`} className={'sidebar-tile-layout'} style={{backgroundColor: isActive ? '#757575' : '#FFF'}}>
            <FontAwesomeIcon className={'sidebar-tile-icon'} icon={icon} size={"lg"} style={{color: isActive ? '#FFF' : '#737791'}}/>
            <div className={'sidebar-tile-title'} style={{color: isActive ? '#FFF' : '#737791'}}>
                {title}
            </div>
        </Link>
    );
}
export default SidebarTile;