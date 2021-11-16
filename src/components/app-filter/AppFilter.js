const AppFilter = ({filter, onFilterSelect}) => {
    const filterButtons = [
        {name: 'all', title: 'Все сотрудники'},
        {name: 'rise', title: 'На повышение'},
        {name: 'moreThan1000', title: ' З/П больше 1000$'}
    ]

    const buttons = filterButtons.map((item) => {
        const active = filter === item.name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                key={item.name}
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(item.name)} 
                type="button">
                    {item.title}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;