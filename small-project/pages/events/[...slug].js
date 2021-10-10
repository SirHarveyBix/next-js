import { useRouter } from 'next/router';
import { EventList } from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import ResultsTitle from '../../components/events/ResultsTitle';
import { data } from '../../data/index';
import CustomButton from '../../components/ui/CustomButton';
import ErrorAlert from '../../components/ui/ErrorAlert';

function FilteredEvents(props) {
  const { filteredEvents } = props;
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) return <p className="center">Loading ...</p>;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

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

export async function getStaticProps(context) {
  const { params } = context;
  const eventsData = await data;

  const filteredYear = params.slug[0];
  const filteredMonth = params.slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  return {
    props: { filteredEvents },
  };
}

export async function getStaticPaths() {
  const eventData = await data;
  const pathsWithParams = eventData.map((event) => ({
    params: { slug: [`${event.date}`] },
  }));

  return {
    paths: pathsWithParams,
    fallback: 'blocking',
  };
}
