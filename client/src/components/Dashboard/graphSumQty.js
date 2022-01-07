import React, {Component} from "react";

import "./graphSumQty.css"
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
        return (
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
        )
    }
}

export default Customers