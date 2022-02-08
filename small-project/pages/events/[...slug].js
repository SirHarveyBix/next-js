import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { EventList } from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import ResultsTitle from '../../components/events/ResultsTitle';
import { getFilteredEvents } from '../../helpers/api-utils';
import Head from 'next/head';

import CustomButton from '../../components/ui/CustomButton';
import ErrorAlert from '../../components/ui/ErrorAlert';
import useSWR from 'swr';

function FilteredEvents() {
  const today = new Date();
  const [events, setEvents] = useState();
  const router = useRouter();
  const filterData = router.query.slug;

  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(
    'https://nextjs-5417c-default-rtdb.europe-west1.firebasedatabase.app/events.json',
    fetcher
  );

  useEffect(() => {
    const events = [];
    if (data) {
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setEvents(events);
    }
  }, [data]);

  const filteredYear = filterData[0];
  const numYear = +filteredYear;
  const filteredMonth = filterData[1];
  const numMonth = +filteredMonth;

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`A list of filtered events`} />
    </Head>
  );

  if (!events)
    return (
      <>
        {pageHeadData} <p className="center">Loading .. </p>
      </>
    );

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for : ${numMonth}/${numYear}`} />
    </Head>
  );

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > today.getFullYear() + 15 ||
    numYear < today.getFullYear() ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <>
        {pageHeadData}
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter, please change dates</p>
          </ErrorAlert>
          <EventsSearch onSearch={findEventsHandler} />
          <CustomButton link="/events">Show all events</CustomButton>
        </div>
      </>
    );
  }
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <>
        {pageHeadData}
        <div className="center">
          <ErrorAlert>
            <p> No events Found for the chosen dates</p>
          </ErrorAlert>
          <EventsSearch onSearch={findEventsHandler} />
          <CustomButton link="/events">Show all events</CustomButton>
        </div>
      </>
    );
  }

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={new Date(numYear, numMonth - 1)} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEvents;

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  const filteredYear = filterData[0];
  const numYear = +filteredYear;
  const filteredMonth = filterData[1];
  const numMonth = +filteredMonth;

  const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

  const today = new Date();
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > today.getFullYear() + 15 ||
    numYear < today.getFullYear() ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      hasError: true,
    };
  }

  return {
    props: {
      events: filteredEvents,
      date: { year: numYear, month: numMonth },
    },
  };
}
