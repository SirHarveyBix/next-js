import Link from 'next/link';

import { getFeaturedEvents } from '../data/index';
import { EventList } from '../components/events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Link href="/events/">Events</Link>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
