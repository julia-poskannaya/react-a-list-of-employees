import EmployeesListItem from "../employees-list-item/EmployeesListItem";

const EmployeesList = ({data, onToggleIncrease, onToggleRise}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
        key={id} 
        {...itemProps} //name={item.name} salary={item.sallary} increase={item.increase}
        onToggleIncrease={() => onToggleIncrease(id)}
        onRise={() => onToggleRise(id)}/> 
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;