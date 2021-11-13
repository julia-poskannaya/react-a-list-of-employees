import React, {useState} from "react";
import { nanoid } from "nanoid";

import AppInfo from "../app-info/AppInfo";
import SearchPannel from "../search-pannel/SearchPannel";
import AppFilter from "../app-filter/AppFilter";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";

const App = () => {
    const identifier = nanoid();
    const [data, setData] = useState([
        {name: 'John D.', salary: 1000, id: 1},
        {name: 'Rose M.', salary: 5000, id: 2},
        {name: 'Stephen T.', salary: 9000, id: 3},
    ]);

    function deleteItem(id){
        setData((data) => {          
            return data.filter(item => item.id !== id);
        })
    }

    function addItem(name, salary){
        const newEmployee = {
            name,
            salary,
            id: identifier
        }

        setData((data) => {
            data = [...data, newEmployee];
            return data;
        })
        
    }    

    return (
        <div className = "app">
            <AppInfo/>

            <div className="search-pannel">
                <SearchPannel/>
                <AppFilter/>
            </div>

            <EmployeesList 
                data={data}
                onDelete={deleteItem}/>
            <EmployeesAddForm onAdd={addItem}/>
        </div>
        
    )
}

export default App;