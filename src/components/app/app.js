import { Component} from 'react';

import './app.css' ;
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-fold';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
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

    onIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                old = data[index],
                newArr = [...data.slice(0, index), {...old, increase : !old.increase}, ...data.slice(index+1)]
                return {
                    data: newArr
                }
        })
    }

    onLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                old = data[index],
                newArr = [...data.slice(0, index), {...old, rise : !old.rise}, ...data.slice(index+1)]
                return {
                    data: newArr
                }
        })
    }

    sortIncrease = () => {
        this.setState(() => {
            const filterIncrease = this.state.data.filter(data => data.increase)
            return {
                data: filterIncrease
            }
        })
    }

    sortSalary = () => {
        this.setState(() => {
            const filterSalary = this.state.data.filter(data => data.salary > 1000)
            return {
                data: filterSalary
            }
        })
    }
.
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter 
                    sortIncrease = {this.sortIncrease}
                    sortSalary= {this.sortSalary}
                    />
                </div>
                
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onLike = {this.onLike}
                    onIncrease = {this.onIncrease}

                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}
export default App