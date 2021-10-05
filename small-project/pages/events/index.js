import { EventList } from '../../components/events/EventList';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../data';
import EventsSearch from '../../components/events/EventsSearch';

function EventsPage() {
  const event = getAllEvents();
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
