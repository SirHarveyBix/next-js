import { EventList } from '../../components/events/EventList';
import { useRouter } from 'next/router';
import EventsSearch from '../../components/events/EventsSearch';
import { data } from '../../data/index';

function EventsPage(props) {
  const { event } = props;

  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={event} />
    </>
  );
}
export default EventsPage;

export async function getStaticProps() {
  const eventData = await data;

  return {
    props: {
      event: eventData,
    },
  };
}

export async function getStaticPaths() {
  const eventData = await data;
  const pathsWithParams = eventData.map((event) => ({ params: { eventId: `${event.id}` } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
