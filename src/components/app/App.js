import React from "react";
import AppInfo from "../app-info/AppInfo";
import SearchPannel from "../search-pannel/SearchPannel";
import AppFilter from "../app-filter/AppFilter";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";


const App = () => {
    return (
        <div className = "app">
            <AppInfo/>

            <div className="search-pannel">
                <SearchPannel/>
                <AppFilter/>
            </div>

            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
        
    )
}

export default App;