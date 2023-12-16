import './app-info.css';

const AppInfo = ({ employees, increasedEmployees }) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in the company</h1>
            <h2>Count of employees: {employees}</h2>
            <h2>Will be awarded: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;