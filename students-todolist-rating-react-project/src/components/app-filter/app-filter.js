import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Всі студенти'},
        {name: 'scholarship', label: 'На стипендію'},
        {name: 'moreThen60', label: 'Оцінка більше 60'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return(
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })
    return(
        <div className="btn-group">
            {buttons}
            {/*<button*/}
            {/*    className="btn btn-light"*/}
            {/*    type="button">*/}
            {/*    Всі студенти*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className="btn btn-outline-light"*/}
            {/*    type="button">*/}
            {/*    На стипендію*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className="btn btn-outline-light"*/}
            {/*    type="button">*/}
            {/*    Оцінка більше 60*/}
            {/*</button>*/}
        </div>
    )
}

export default AppFilter;