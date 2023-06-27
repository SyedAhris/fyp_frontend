import React from 'react';
import './TopBar.css';
import {useSelector} from "react-redux";
import {UserState} from "../../Reducers/User";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

interface TopBarProps {
    title: String;
}

const TopBar: React.FC<TopBarProps> = ({title}) => {
    const user:UserState = useSelector((state: any) => state.user);
    return (
      <div className={'topbar-layout'}>
          <div className={'topbar-title'}>
              {title}
          </div>
          <div className={'topbar-account'}>
              <FontAwesomeIcon className={'fa-circle-user'} icon={faCircleUser} size={"2xl"}/>
              <div className={'topbar-user'}>
                  <div className={'topbar-user-text-name'}><b>{user.name}</b></div>
                  <div className={'topbar-user-text-admin'}>{user.isSuper ? 'Basic' : 'Super'}</div>
              </div>
          </div>
      </div>
    );
}

export default TopBar;