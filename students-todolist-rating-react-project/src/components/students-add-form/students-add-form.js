import './students-add-form.css';

const StudentsAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Додати нового студента</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Ім'я?" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Оцінка?" />

                <button type="submit"
                        className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    )
}

export default StudentsAddForm;