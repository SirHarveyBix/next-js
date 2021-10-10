import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';
import CustomButton from '../../components/ui/CustomButton';

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

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
