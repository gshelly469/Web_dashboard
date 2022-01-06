import React, {Component} from "react";
import data from './dummydata'

import "./hospital.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

class Customers extends Component{
    constructor(){
        super();
        this.state = {
            customers : []
        }
    }

    componentDidMount(){
        fetch("/getAllUsers")
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log(this.state.customers)))
    }

    render(){
        // const first_data = this.state.customers[0];
        // const {first, second} = first_data[0];
        // console.log(first);
        return (
            <div className="Website">
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
                <div className="dashboard">
                    <div className="sidebar">
                        <h3 className="sidebarTitle">  <DashboardRoundedIcon /> SideBar </h3> 
                        <ul className="sidebarList">
                            <li className="Home"> <BarChartRoundedIcon /> Dashboard </li>
                            <li className="Home"> <InsightsRoundedIcon /> Analytics </li>
                        </ul>
                    </div>
                    <div className="Chart">
                        Hi
                        <ResponsiveContainer width={"100%"} aspect={4}>
                            <LineChart data={this.state.customers}>
                                <Line type="monotone" dataKey="sum_qty" stroke="#8884d8" strokeWidth={2} />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey={"_id"} />
                                <YAxis dataKey={"sum_qty"} />
                            </LineChart>
                        </ResponsiveContainer>
                        {/* {this.state.customers.map(customer=>
                            <li key={customer._id}> On {customer._id} date total GRN entries were {customer.sum_qty} </li>
                        )} */}
                    </div>

                </div>
                
                
            </div>
        )
    }
}

export default Customers