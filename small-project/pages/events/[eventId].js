import { Fragment } from 'react';
import { data } from '../../data/index';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';
import CustomButton from '../../components/ui/CustomButton';

function EventDetailPage(props) {
  const event = props;

  if (!event)
    return (
      <div className="center">
        <ErrorAlert>
          <p>No event found !</p>
        </ErrorAlert>
        <CustomButton link="/events">Show all events</CustomButton>
      </div>
    );

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default EventDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.eventId;
  const event = (await data).find((event) => event.id === id);

  return { props: event };
}

export async function getStaticPaths() {
  const eventData = await data;
  const pathsWithParams = eventData.map((event) => ({ params: { eventId: `${event.id}` } }));

  return {
    paths: pathsWithParams,
    fallback: 'blocking',
  };
}
