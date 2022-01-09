import React, {Component} from "react";
import "./supplierSumAmt.css"

import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from "recharts"

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },

  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28','#8884d8', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class suppNetAmount extends Component{
    constructor(){
        super();
        this.state = {
            supplier : []
        }
    }

    componentDidMount(){
        fetch("/getAllUsers/suppliers")
        .then(res => res.json())
        .then(supplier => this.setState({supplier}, () => console.log(this.state.supplier[0].supp_sum_netAmount)))
    }
    // 
    render(){
        // const {list} = this.state.supplier;
        // var as = JSON.parse(this.state.supplier);
        // console.log(as);
        return(
            <div className="suppDash">
                supp
                <ResponsiveContainer width={"100%"} aspect={3}>
                    <PieChart width={400} height={400} onMouseEnter={this.on}>
                        <Pie 
                        data={this.state.supplier}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="supp_sum_netAmount"
                        activeIndex={0}
                        label
                        >
                        {this.state.supplier.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />    ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />}/>
                    </PieChart>
                </ResponsiveContainer>
                {/* <div className="body">
                    <ul>
                    {this.state.supplier.map()}
                    </ul>
                </div> */}
            </div>
        )
    }
}

function CustomTooltip({active, payload, label}){
    console.log(payload[0]);
    if (active){
        return (
            <div className="tooltip">
                <h3>Net Amount </h3>
                {/* <p>{this.state.supplier}</p> */}
                <p>Rs {payload[0].payload._id} </p>
            </div>
        )
    }
    return null;
}

export default suppNetAmount;