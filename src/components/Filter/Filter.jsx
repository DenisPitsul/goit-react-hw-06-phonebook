import { getFilter } from 'redux/selectors';
import classes from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const onFilterChange = (value) => {
        dispatch(setFilter(value))
    }

    return (
        <div className={classes.filter}>
            <h3 className={classes.filterTitle}>Find contacts by name</h3>
            <input 
                className={classes.filterInput}
                value={filter}
                onChange={e => onFilterChange(e.target.value)}
            />
        </div>
    )
}

export default Filter;