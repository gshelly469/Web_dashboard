import React from "react";
import GraphSumQty from "./components/Dashboard/graphSumQty"
import Topbar from './components/Topbar/topbar'
import Sidebar from "./components/Sidebar/sidebar"
import SupplierGraph from "./components/Dashboard/supplierSumAmt"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

import "./app.css"

function Home(){
    return(
        <div>
            Home
        </div>
    )
}
function Sup(){
    return(
        <div>
            Suo
        </div>
    )
}


function App() {
    return (
    <div className="App">

        <div className="Topbar"> <Topbar /></div>

        {/* <div className="Dasboard"> */}

            <Sidebar />  
            
        {/* </div> */}
    </div>
    );
}

export default App;