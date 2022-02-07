import { EventList } from '../../components/events/EventList';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-utils';
import EventsSearch from '../../components/events/EventsSearch';
import { data } from '../../data/index';

function EventsPage(props) {
  const { events } = props;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}

export default EventsPage;

export async function getStaticPaths() {
  // TODO
  const eventData = await data;
  const pathsWithParams = eventData.map((event) => ({ params: { eventId: `${event.id}` } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
