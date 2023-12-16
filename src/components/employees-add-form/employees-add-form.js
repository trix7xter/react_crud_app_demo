import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { addItem } = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex"  onSubmit = {this.onSubmit}>
                    <input type="text" className="form-control new-post-label" placeholder="What's his name?" onChange={this.onValueChange} name="name" value={name}/>
                    <input type="number" className="form-control new-post-label" placeholder="His salary?" onChange={this.onValueChange} name="salary" value={salary}/>
                    <button type="submit" className="btn btn-outline-light" onSubmit={this.onSubmit}>Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;