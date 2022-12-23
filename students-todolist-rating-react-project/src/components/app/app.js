import {Component} from "react";import './app.css';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import StudentsList from "../students-list/students-list";
import StudentsAddForm from "../students-add-form/students-add-form";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Артем Коломієць", score: 80, scholarship: false, rise: false},
                {id: 2, name: "Олександр Волков", score: 100, scholarship: false, rise: true},
                {id: 3, name: "Дашуня", score: 99, scholarship: true, rise: false},
                {id: 4, name: "Юля", score: 99, scholarship: false, rise: false}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    addItem = (name, score) => {
        const newItem = {
            name,
            score,
            scholarship: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => +elem.id === +id);
            // const before = data.slice(0, index)
            // const after = data.slice(index + 1)
            // const newArr= [...before, ...after];
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }


    onUpdateSearch = (term) => {
        this.setState({term});
    }
    onToggleScholarship = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     console.log(index)
        //     const old = data[index];
        //     const newItem = {...old, scholarship: !old.scholarship};
        //     const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)]
        //
        //     return{
        //         data : newArr
        //     }
        // })
        this.setState(({data}) => ({
                data: data.map(item => {
                    if(item.id === id) {
                        return{
                            ...item,
                            scholarship: !item.scholarship
                        }
                    }
                    return item;
                })
            }))
    }

    onToggleRise= (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return{
                        ...item,
                        rise: !item.rise
                    }
                }
                return item;
            })
        }))
    }

    searchStudent = (items, term) =>{
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch (filter){
            case 'scholarship':
                return items.filter(item => item.scholarship);
            case 'moreThen60':
                return items.filter(item => item.score > 59)
            default:
                return items
        }
    }

    onFilterSelect = (filter) =>{
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const students = this.state.data.length;
        const scholarshiped = this.state.data.filter(item => item.scholarship).length;
        const visibleData = this.filterPost(this.searchStudent(data,term), filter)

        return (
            <div className="app">
                <AppInfo scholarshiped={scholarshiped} students={students}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <StudentsList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleScholarship={this.onToggleScholarship}
                    onToggleRise={this.onToggleRise}/>
                <StudentsAddForm onAdd={this.addItem}/>
            </div>
        );
    }


}

export default App;