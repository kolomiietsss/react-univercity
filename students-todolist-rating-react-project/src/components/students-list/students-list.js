import StudentsListItem from "../students-list-item/students-list-item";
import './students-list.css';

const StudentsList = ({data}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item
        return(
            <StudentsListItem key={id} {...itemProps}/>
        )
    }) ;

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default StudentsList;