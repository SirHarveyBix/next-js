import { useRef } from 'react';
import { months, years } from '../../data';
import Button from '../ui/Button';
import classes from '../../styles/EventsSearch.module.css';

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {years.map((year) => (
              <option key={year.id} value={`${year.value}`}>
                {year.value}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((month) => (
              <option key={month.id} value={`${month.id}`}>
                {month.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find events </Button>
    </form>
  );
}

export default EventsSearch;
