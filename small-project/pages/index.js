import { data } from '../data/index';
import { EventList } from '../components/events/EventList';

function HomePage(props) {
  const { featuredEvents } = props;

  return <EventList items={featuredEvents} />;
}
export default HomePage;

export async function getStaticProps() {
  const dataEvents = await data;
  const featuredEvents = dataEvents.filter((event) => event.isFeatured);

  return {
    props: { featuredEvents },
  };
}
