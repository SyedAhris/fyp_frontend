import React from "react";
import "./Layout.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import TopBar from "../../Components/TopBar/TopBar";

interface LayoutProps {
    title: String;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({title, children}) => {
    return (
        <div className={'layout'}>
            <Sidebar title={title}/>
            <div className={'layout-content'}>
                <TopBar title={title}/>
                <div className="layout-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;