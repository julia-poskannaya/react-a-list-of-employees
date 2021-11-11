import { useState } from "react";

const EmployeesListItem = ({name, salary}) => {
    const [increaseValue, setIncreaseValue] = useState(false);
    const [riseValue, setRiseValue] = useState(false);

    let classNames = "list-group-item d-flex justify-content-between";
    if(increaseValue){
        classNames += ' increase';
    }

    if(riseValue){
        classNames += ' like';
    }
    
    function onIncrease(){
        setIncreaseValue(increaseValue => !increaseValue);
    }

    function onRise(){
        setRiseValue(riseValue => !riseValue);
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                type="button" 
                className="btn-cookie btn-sm "
                onClick={onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;