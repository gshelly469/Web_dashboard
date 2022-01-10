import React from "react";

import './sidebar.css'
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom"

import GraphSumQty from "../Dashboard/graphSumQty"
import SupplierGraph from "../Dashboard/supplierSumAmt"
import SkuGraph from "../Dashboard/skuSumAmt"


export default function sidebar() {
    return(
        <Router>
        <div className="dashboard">
            <div className="sidebar">
                <h3 className="sidebarTitle"> <DashboardRoundedIcon /> SideBar </h3> 
                <ul className="sidebarList">
                    <li className="Home"> <BarChartRoundedIcon /> <Link to="/"> Dashboard </Link> </li>
                    <li className="Home"> <InsightsRoundedIcon /> <Link to="/supplier"> Supplier </Link> </li>
                    <li className="Home"> <InsightsRoundedIcon /> <Link to="/sku"> sku </Link> </li>
                </ul>
            </div>
            <div className="Graph">
                <Routes>
                    <Route exact path="/" element={<GraphSumQty />} />
                    <Route exact path="/supplier" element={<SupplierGraph />} />
                    <Route exact path="/sku" element={<SkuGraph />} />
                </Routes>
            </div>
        </div>

        </Router>
    );
}