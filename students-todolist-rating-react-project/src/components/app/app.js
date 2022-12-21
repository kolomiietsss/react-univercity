import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import StudentsList from "../students-list/students-list";
import StudentsAddForm from "../students-add-form/students-add-form";

function App(){

    const data = [
        {id: 1, name: "Артем Коломієць", score: 80, scholarship: false},
        {id: 2, name: "Олександр Волков", score: 100, scholarship: false},
        {id: 3, name: "Дашуня", score: 99, scholarship: true},
        {id: 4, name: "Юля", score: 99, scholarship: false}
    ];

    return (
          <div className="app">
                <AppInfo/>
              <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
              </div>
              <StudentsList data={data}/>
              <StudentsAddForm/>
          </div>
    );
}

export default App;