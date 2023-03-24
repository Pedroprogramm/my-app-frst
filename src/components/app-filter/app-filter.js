import './app-filter.css';

const AppFilter = (props) => {
    const {filterBtnSearch, filterBtn} = props
    const Btn = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'}
];
const buttons = Btn.map(({name, label}) => {
    const active = filterBtn === name; 
    function classNames() { if (active) { return "btn btn-light"; }
                            else { return "btn btn-outline-light"; } }
    return (
        <button className={classNames()}
        type='button'
        name={name}
        key={name}
        onClick={filterBtnSearch}
        >
            {label}
</button>
    )
    })
    return (
       
        <div className='btn-group'>
        {buttons}
        </div>
    )
}

export default AppFilter
