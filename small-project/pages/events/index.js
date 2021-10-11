import { EventList } from '../../components/events/EventList';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-utils';
import EventsSearch from '../../components/events/EventsSearch';

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
