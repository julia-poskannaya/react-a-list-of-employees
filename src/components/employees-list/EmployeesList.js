import EmployeesListItem from "../employees-list-item/EmployeesListItem";

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}//name={item.name} salary={item.sallary}, increase={item.increase}, rise={item.rise}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        ) 
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;