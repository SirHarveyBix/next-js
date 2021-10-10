import { getFeaturedEvents } from '../helpers/api-utils';
import { EventList } from '../components/events/EventList';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    // half-hour
    revalidate: 1800,
  };
}

export default HomePage;
