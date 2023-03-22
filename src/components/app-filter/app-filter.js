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
        onClick={filterBtnSearch}
        >
            {label}
</button>
    )
    })
    return (
       
        <div className='btn-group'>
        {buttons}
            {/* <button className="btn btn-light"
                    type='button'
                    name='all'
                    onClick={filterBtnSearch}
                    >
                        Все сотрудники
            </button>
            <button className="btn btn-outline-light"
                    type='button'
                    onClick={filterBtnSearch}
                    name='increase'>
                        На повышение
            </button>
            <button className="btn btn-outline-light"
                    type='button'
                    onClick={filterBtnSearch}
                    name='salary'>
                        З/П больше 1000$
            </button> */}

        </div>
    )
}

export default AppFilter
