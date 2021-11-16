import { useState } from "react";

const SearchPannel = ({onUpdateSearch}) => {
    let [term, setTerm] = useState('');

    function onUpdate(e){
        term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
    }
    return (
        <input 
            className="form-control search-input"
            type="text"
            placeholder="Найти сотрудника"
            value={term}
            onChange={onUpdate}/>
    )
}

export default SearchPannel;