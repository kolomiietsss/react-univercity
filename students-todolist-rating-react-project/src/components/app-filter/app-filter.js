import './app-filter.css';

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                Всі студенти
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                На стипендію
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Оцінка більше 60
            </button>
        </div>
    )
}

export default AppFilter;