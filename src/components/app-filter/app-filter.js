import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'All employees' },
        { name: 'rise', label: 'Employees with graduate' },
        { name: 'moreThan1000', label: 'Salary more than 1000$' },
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const backlightButton = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button className={`btn ${backlightButton}`} type="button" key={name} onClick={() => props.onFilterSelect(name)}>
                {label}
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