import React from "react";
import "./topbar.css"

import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar () {
    return (
        <div classname="Topbar">
            <div className="topbarWrapper">
                <div className="TopLeft"> 
                    <span className="Logo">
                        Admin
                    </span>
                </div>
                <div className="TopRight"> 
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
