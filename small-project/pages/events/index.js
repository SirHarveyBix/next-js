import { EventList } from '../../components/events/EventList';
import { getAllEvents } from '../../data';

function EventsPage() {
  const event = getAllEvents();

  if (!event) return <p>No event found !</p>;

  return (
    <div>
      <h1>Events Page</h1>
      <EventList items={event} />
    </div>
  );
}
export default EventsPage;
