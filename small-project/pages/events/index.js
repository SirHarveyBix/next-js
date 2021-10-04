import { useRouter } from 'next/router';
import Link from 'next/link';

function EventsPage() {
  const router = useRouter();

  function loadEventHandler() {
    router.push({
      pathname: '/events/[eventId]',
      query: { eventId: 1 },
    });
  }
  return (
    <div>
      <Link href="/">HomePage</Link>
      <h1>Events Page</h1>
      <button onClick={loadEventHandler}>select this event</button>
    </div>
  );
}
export default EventsPage;
