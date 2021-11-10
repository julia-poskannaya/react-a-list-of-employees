import React from "react";
import AppInfo from "../app-info/AppInfo";
import SearchPannel from "../search-pannel/SearchPannel";
import AppFilter from "../app-filter/AppFilter";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";


const App = () => {
    const data = [
        {name: 'John D.', salary: 1000, increase: true},
        {name: 'Rose M.', salary: 5000, increase: false},
        {name: 'Stephen T.', salary: 9000, increase: false},
    ]
    return (
        <div className = "app">
            <AppInfo/>

            <div className="search-pannel">
                <SearchPannel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
        
    )
}

export default App;