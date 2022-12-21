import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import StudentsList from "../students-list/students-list";
import StudentsAddForm from "../students-add-form/students-add-form";

function App(){

    const data = [
        {name: "Артем Коломієць", score: 80, increase: false},
        {name: "Олександр Волков", score: 100, increase: false},
        {name: "Дашуня", score: 99, increase: true},
        {name: "Юля", score: 99, increase: false}
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