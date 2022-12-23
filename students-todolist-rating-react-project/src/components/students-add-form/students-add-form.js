import {Component} from "react";
import './students-add-form.css';

class StudentsAddForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            score: ''
        }
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.score);
        this.setState({
            name: '',
            score: ''
        })
    }

    render() {
        const {name, score} = this.state;
        return (
        <div className="app-add-form">
            <h3>Додати нового студента</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Ім'я?"
                       value={name}
                       name={"name"}
                onChange={this.onValueChange}/>
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Оцінка?"
                       value={score}
                       name={"score"}
                onChange={this.onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    )
    }


}

export default StudentsAddForm;