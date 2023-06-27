import React from "react";
import "./StatisticsTile.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface StatisticsTileProps {
    title: string;
    value: string;
    icon:any ;
    primaryColor: string;
    secondaryColor: string;
}

const StatisticsTile: React.FC<StatisticsTileProps> = ({title, value, icon, primaryColor, secondaryColor}) => {
    return (
        <div className={'statistics-tile-layout'} style={{backgroundColor:secondaryColor}}>
            <div className={'statistics-tile-background'} style={{backgroundColor:primaryColor}}>
                <FontAwesomeIcon className={'statistics-tile-icon'} icon={icon} size={"lg"}/>
            </div>
            <div className={'statistics-tile-value'}>
                {value}
            </div>
            <div className={'statistics-tile-title'}>
                {title}
            </div>
        </div>
    );
};

export default StatisticsTile;