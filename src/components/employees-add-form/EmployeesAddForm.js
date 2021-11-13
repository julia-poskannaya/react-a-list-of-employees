import  { useState } from "react";

const EmployeesAddForm = ({onAdd}) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    function onNameChange(e){
        setName(e.target.value)
    }

    function onSalaryChange(e){
        setSalary(e.target.value)
    }

    function onAddEmployee(e){
        e.preventDefault();
        onAdd(name, salary);
        setName('');
        setSalary('');
    }


    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={onAddEmployee}
                className="add-form d-flex">
                <input
                    onChange={onNameChange} 
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={name} />

                <input
                    onChange={onSalaryChange} 
                    type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={salary} />

                <button 
                    type="submit"
                    className="btn btn-outline-light">Добавить
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;