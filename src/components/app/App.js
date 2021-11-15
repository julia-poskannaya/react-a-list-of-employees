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
        {name: 'John D.', salary: 1000, increase: false, rise: false, id: 1},
        {name: 'Rose M.', salary: 5000, increase: false, rise: false, id: 2},
        {name: 'Stephen T.', salary: 9000, increase: false, rise: false, id: 3},
    ]);

    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    
    function deleteItem(id){
        setData((data) => {          
            return data.filter(item => item.id !== id);
        })
    }

    function addItem(name, salary){
        const newEmployee = {
            name,
            salary,
            increase: false,
            rise: false,
            id: identifier
        }

        setData((data) => {
            data = [...data, newEmployee];
            return data;
        })
    }   
    
    function onToggleProp(id, prop){
       setData((data)=> {
            return data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
       })
    }
    return (
        <div className = "app">
            <AppInfo 
                employees={employees} 
                increased={increased}/>

            <div className="search-pannel">
                <SearchPannel/>
                <AppFilter/>
            </div>

            <EmployeesList 
                data={data}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}/>
            <EmployeesAddForm onAdd={addItem}/>
        </div>
        
    )
}

export default App;