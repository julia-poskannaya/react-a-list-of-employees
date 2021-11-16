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
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');
        
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

    function searchEmployee(items, term){
        if(term.length === 0 ){
            return items
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    }

    function onUpdateSearch(term){
        setTerm(term);
    }

    function filterEmployees(items, filter){
        switch (filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    function onFilterSelect(filter){
        setFilter(filter);
    }

    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    const searchData = searchEmployee(data, term); 
    const visibleData = filterEmployees(searchData, filter);

    return (
        <div className = "app">
            <AppInfo 
                employees={employees} 
                increased={increased}/>

            <div className="search-pannel">
                <SearchPannel 
                    onUpdateSearch={onUpdateSearch}/>
                <AppFilter
                    onFilterSelect={onFilterSelect}
                    filter={filter}/>
            </div>

            <EmployeesList 
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}/>
            <EmployeesAddForm onAdd={addItem}/>
        </div>
        
    )
}

export default App;