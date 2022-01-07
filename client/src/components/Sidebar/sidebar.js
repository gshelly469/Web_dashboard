import React from "react";

import './sidebar.css'
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';


export default function sidebar() {
    return(
        <div className="sidebar">
            <h3 className="sidebarTitle">  <DashboardRoundedIcon /> SideBar </h3> 
            <ul className="sidebarList">
                <li className="Home"> <BarChartRoundedIcon /> Dashboard </li>
                <li className="Home"> <InsightsRoundedIcon /> Analytics </li>
            </ul>
        </div>
    );
}