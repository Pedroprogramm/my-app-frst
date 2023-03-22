import './search-panel.css';

const SearchPanel = (props) => {
    const {termSearch} = props
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            onChange={termSearch}
        />
    )
};

export default SearchPanel;