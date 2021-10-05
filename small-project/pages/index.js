import { getFeaturedEvents } from '../data/index';
import { EventList } from '../components/events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
