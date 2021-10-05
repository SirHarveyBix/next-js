import { EventList } from '../../components/events/EventList';
import { getAllEvents } from '../../data';
import EventsSearch from '../../components/events/EventsSearch';
function EventsPage() {
  const event = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={event} />
    </>
  );
}
export default EventsPage;
