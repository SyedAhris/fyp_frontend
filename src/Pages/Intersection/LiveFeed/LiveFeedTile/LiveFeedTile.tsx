import React from "react";
import './LiveFeedTile.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface LiveFeedTileProps {
    icon : any;
    heading : string;
    value : string;
}

const LiveFeedTile: React.FC<LiveFeedTileProps> = ({icon, heading, value}) => {
    return (
        <div className={'live-feed-tile-layout'}>
            <FontAwesomeIcon className={'live-feed-tile-icon'} icon={icon} size={"lg"}/>
            <div className={'live-feed-tile-content'}>
                <div className={'live-feed-tile-heading'}>{heading}</div>
                <div className={'live-feed-tile-value'}>{value}</div>
            </div>
        </div>
    );
}

export default LiveFeedTile;