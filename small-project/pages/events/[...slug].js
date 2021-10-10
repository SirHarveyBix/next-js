import { useRouter } from 'next/router';
import { EventList } from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import ResultsTitle from '../../components/events/ResultsTitle';
import { getFilteredEvents } from '../../data';
import CustomButton from '../../components/ui/CustomButton';
import ErrorAlert from '../../components/ui/ErrorAlert';

function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) return <p className="center">Loading ...</p>;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  const today = new Date();
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > today.getFullYear() + 15 ||
    numYear < today.getFullYear() ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter, please change dates</p>
          </ErrorAlert>
          <EventsSearch onSearch={findEventsHandler} />
          <CustomButton link="/events">Show all events</CustomButton>
        </div>
      </>
    );
  }

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <>
        <div className="center">
          <ErrorAlert>
            <p> No events Found for the chosen dates</p>
          </ErrorAlert>
          <EventsSearch onSearch={findEventsHandler} />
          <CustomButton link="/events">Show all events</CustomButton>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(numYear, numMonth - 1)} />
      <EventList items={filteredEvents} />
    </>
  );
}
export default FilteredEvents;
