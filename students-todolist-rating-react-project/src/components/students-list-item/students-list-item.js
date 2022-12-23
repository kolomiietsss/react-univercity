import './students-list-item.css';

const StudentsListItem =  (props) => {
       const  {name, score, onDelete, onToggleScholarship, onToggleRise, scholarship, rise} = props;

       let classNames = "list-group-item d-flex justify-content-between";
       if(scholarship){
           classNames += ' scholarship'
       }
       if(rise){
           classNames += ' like'
       }

       return (
           <li className={classNames}>
               <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
               <input type="text" className="list-group-item-input" defaultValue={score}/>
               <div className='d-flex justify-content-center align-items-center'>
                   <button type="button"
                           className="btn-cookie btn-sm "
                           onClick={onToggleScholarship}>
                       <i className="fas fa-cookie"></i>
                   </button>

                   <button type="button"
                           className="btn-trash btn-sm "
                           onClick={onDelete}>
                       <i className="fas fa-trash"></i>
                   </button>
                   <i className="fas fa-star"></i>
               </div>
           </li>
       )
}

export default StudentsListItem;