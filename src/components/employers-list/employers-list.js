import EmployeesListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data, onLike, onIncrease, onDelete}) => {


    const element = data.map(item => {
        const {id, ...itemProps} = item;
        
        return(
        <EmployeesListItem 
        key ={id} 
        {...itemProps}
            onDelete = {() => {onDelete(id)}}
            onLike = {() => {onLike(id)}}
            onIncrease = {() => {onIncrease(id)}}
        />
    )})

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployersList