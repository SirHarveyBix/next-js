import { months, years } from '../../data';
import Button from '../ui/Button';
import classes from '../../styles/EventsSearch.module.css';

function EventsSearch() {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            {years.map((year) => (
              <option value={`${year.value}`}>{year.value}</option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {months.map((month) => (
              <option value={`${month.id}`}>{month.value}</option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find events </Button>
    </form>
  );
}

export default EventsSearch;
