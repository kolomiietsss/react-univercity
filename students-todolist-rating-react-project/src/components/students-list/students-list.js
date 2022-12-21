import StudentsListItem from "../students-list-item/students-list-item";
import './students-list.css';

const StudentsList = () => {
    return (
        <ul className="app-list list-group">
            <StudentsListItem name={"Олександр Волков"} score={30}/>
            <StudentsListItem name={"Артем Коломієць"} score={80}/>
            <StudentsListItem name={"Олександра Бондарчук"} score={90}/>
        </ul>
    )
}

export default StudentsList;