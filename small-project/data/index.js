// picked up from : https://github.com/mschwarzmueller/nextjs-course-code/blob/03-prj-routing-extra-files/data/dummy-data.js
// firebase db : https://console.firebase.google.com/u/0/project/nextjs-5417c/database/nextjs-5417c-default-rtdb/data

export const data = fetch(
  'https://nextjs-5417c-default-rtdb.europe-west1.firebasedatabase.app/events.json'
)
  .then((response) => response.json())
  .then((data) =>
    Object.keys(data).map((eventId) => ({
      id: eventId,
      ...data[eventId],
    }))
  );

const today = new Date();
const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone (local)',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: `${today.getFullYear()}-05-12`,
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts (local)',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: `${today.getFullYear()}-05-30`,
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts (local)',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: `${today.getFullYear() + 1}-04-10`,
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'A code example (local)',
    description:
      "You don't know what to work on ? Might wan't to improve your actual skill on languages you actually know ? Wrong idea, despite of improving your talents on React you already know, try out GraphQL, call and make you databases with prisma, type everthing you can with TypeScript, and try the Server Side Rendering, rather to introspect the incremental Static Regeneration, for your users !",
    location: 'New Hemp Instead 420, 10999 High Sky City',
    date: `${today.getFullYear() + 1}-08-17`,
    image: 'images/what-to-learn.jpg',
    isFeatured: false,
  },
];

export const months = [
  { id: 1, value: 'January' },
  { id: 2, value: 'February' },
  { id: 3, value: 'March' },
  { id: 4, value: 'April' },
  { id: 5, value: 'May' },
  { id: 6, value: 'June' },
  { id: 7, value: 'July' },
  { id: 8, value: 'August' },
  { id: 9, value: 'September' },
  { id: 10, value: 'October' },
  { id: 11, value: 'November' },
  { id: 12, value: 'December' },
];

export const years = [
  { id: 0, value: today.getFullYear() },
  { id: 1, value: today.getFullYear() + 1 },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
