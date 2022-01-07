import React from "react";
import GraphSumQty from "./components/Dashboard/graphSumQty"
import Topbar from './components/Topbar/topbar'
import Sidebar from "./components/Sidebar/sidebar"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

import "./app.css"


function App() {
    return (
    <div className="App">

        <div className="Topbar"> <Topbar /></div>

        <div className="Dasboard">

            <div className="Sidebarclass">  <Sidebar />  </div>
            <div className="Graph">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<GraphSumQty />} />
                    </Routes>                   
                </Router>
            </div>
            
        </div>
    </div>
    );
}

export default App;