import './app-filter.css';

const AppFilter = (props) => {
    const {sortIncrease, sortSalary} = props
    return (
        <div className='btn-group'>
            <button className="btn btn-light"
                    type='button'
                    // onClick={}
                    >
                        Все сотрудники
            </button>
            <button className="btn btn-outline-light"
                    type='button'
                    onClick={sortIncrease}>
                        На повышение
            </button>
            <button className="btn btn-outline-light"
                    type='button'
                    onClick={sortSalary}>
                        З/П больше 1000$
            </button>

        </div>
    )
}

export default AppFilter
