import React from "react";
import './IntersectionTile.css'
import {IntersectionData} from "../Intersection";
import {faTv, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {Intersection} from "../../../Classes/Intersection";

const IntersectionTile: React.FC<Intersection> = (intersectionData : Intersection) => {
    const navigate = useNavigate();
    const handleLiveClick = () => {
        const queryParams = new URLSearchParams({
            _id : intersectionData._id,
            name : intersectionData.name,
            latitude : intersectionData.location.lat.toString(),
            longitude : intersectionData.location.long.toString(),
            signals : intersectionData.signals.map(signal => signal._id).join(','),
        }).toString();
        console.log(queryParams);
        navigate(`/live/?${queryParams}`);
    }
  return (
      <div className={'intersection-tile-layout'}>
          <div className={'intersection-tile-id'}>
              {intersectionData._id}
          </div>
          <div className={'intersection-tile-name'}>
              {intersectionData.name}
          </div>
          <div className={'intersection-tile-coordinates'}>
              {`${intersectionData.location.lat},${intersectionData.location.long}`}
          </div>
          <FontAwesomeIcon className={'intersection-tile-live'} icon={faTv} onClick={handleLiveClick}/>
          <FontAwesomeIcon className={'intersection-tile-edit'} icon={faPenToSquare}/>
      </div>
  );
};

export default IntersectionTile;