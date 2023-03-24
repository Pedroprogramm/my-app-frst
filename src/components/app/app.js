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
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
                {name: 'Alfred X.', salary: 2000, increase: false, rise: false, id: 4},
                {name: 'Justine U.', salary: 1300, increase: false, rise: false, id: 5},
                {name: 'Casper I.', salary: 2000, increase: false, rise: false, id: 6}
            ],
            term : '',
            filterBtn: 'all',
        }
        this.maxId = 7;
        // this.term = '';
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

    sortBtn = (items, filterBtn) => {
        // items.forEach(items => (items.sort()))
            // if (filterBtn === 'all') 
            //     {return items} 
            
            // else if (filterBtn === 'salary') 
            //     { return items.filter(item => 
            //         {return item.salary > 1000})
            // } 

            // else if(filterBtn === 'increase')
            //     {return items.filter(item => 
            //         {return item.increase})}
    switch(filterBtn){
        case "all": 
            return items;
        case "salary": 
            return items.filter(item => 
                {return item.salary > 1000}); 
        case "increase": 
            return items.filter(item => 
                {return item.increase})
        default: 
            console.log('error') 
    }
}

    onSearchEmployers = (items, term) => {
       if (term.length === 0 || term === false) {
            return items
        } else {
            return items.filter(data => { 
                return data.name.indexOf(term) > -1 
            });
        }                                
    }
    
    termSearch = (e) => {
        this.setState(() => {
            return {term : e.target.value}
        })
    }

    filterBtnSearch = (e) => {
        this.setState(() => {
            return {filterBtn :  e.target.name }
        })
    }
    
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.rise).length;
        const visibleData = this.sortBtn(this.onSearchEmployers(this.state.data, this.state.term), this.state.filterBtn);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    termSearch= {this.termSearch}
                    />
                    <AppFilter 
                    filterBtn={this.state.filterBtn}
                    filterBtnSearch= {this.filterBtnSearch}
                    />
                </div>
                
                <EmployersList 
                    data={visibleData}
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