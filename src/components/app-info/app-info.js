import './app-info.css' ;

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h2>Учет сотрудников в компании N</h2>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased} </h2>
        </div>
    )
};

export default AppInfo