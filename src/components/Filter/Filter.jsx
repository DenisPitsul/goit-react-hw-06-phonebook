import classes from './Filter.module.css'

const Filter = ({filter, onFilterChange}) => {

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