import { useRouter } from 'next/router';
import { EventList } from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import ResultsTitle from '../../components/events/ResultsTitle';
import { getFilteredEvents } from '../../helpers/api-utils';
import CustomButton from '../../components/ui/CustomButton';
import ErrorAlert from '../../components/ui/ErrorAlert';
// import useSWR from 'swr';

function FilteredEvents(props) {
  const router = useRouter();
  const filteredEvents = props.events;
  // const filteredYear = filterData[0];
  // const numYear = +filteredYear;
  // const filteredMonth = filterData[1];
  // const numMonth = +filteredMonth;
  // const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  //  const today = new Date();
  // if (
  //   isNaN(numMonth) ||
  //   isNaN(numYear) ||
  //   numYear > today.getFullYear() + 15 ||
  //   numYear < today.getFullYear() ||
  //   numMonth < 1 ||
  //   numMonth > 12
  // ) {
  //   return;
  // }

  if (props.hasError) {
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
      <ResultsTitle date={new Date(props.date.year, props.date.month - 1)} />
      <EventList items={filteredEvents} />
    </>
  );
}
export default FilteredEvents;

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  const filteredYear = filterData[0];
  const numYear = +filteredYear;
  const filteredMonth = filterData[1];
  const numMonth = +filteredMonth;

  const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

  const today = new Date();
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > today.getFullYear() + 15 ||
    numYear < today.getFullYear() ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      hasError: true,
    };
  }

  return {
    props: {
      events: filteredEvents,
      date: { year: numYear, month: numMonth },
    },
  };
}
