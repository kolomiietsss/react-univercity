import './app-info.css';

// CamelCase for Babel (comp or elem)
const AppInfo = ({scholarshiped, students}) => {
    return (
        <div className="app-info">
            <h1>Дисципліна React ІПЗ-20-1</h1>
            <h2>Загальна кількість студентів:{students} </h2>
            <h2>Стипернію отримають: {scholarshiped}</h2>
        </div>
    )
}


export default AppInfo;