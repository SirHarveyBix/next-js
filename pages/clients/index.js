// possible path = /client/theclient/theproject
// /client/theclient/theproject
// /client is static  /theclient & /theproject are dynamic, made possible by [id] & [clientid].js
import Link from 'next/link';
function ClientPage() {
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        <li>
          <Link href="clients/1">client projects</Link>
        </li>
      </ul>
    </div>
  );
}
export default ClientPage;
