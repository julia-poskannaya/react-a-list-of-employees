import EmployeesListItem from "../employees-list-item/EmployeesListItem";

const EmployeesList = ({data}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem key={id} {...itemProps}/> //name={item.name} salary={item.sallary} increase={item.increase}
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;