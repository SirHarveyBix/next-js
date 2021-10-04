// possible path = /client/theclient/theproject
// /client/theclient/theproject
// /client is static  /theclient & /theproject are dynamic, made possible by [id] & [clientid].js
import Link from 'next/link';

function ClientPage() {
  const clients = [
    {
      id: 'max',
      name: 'Maxim',
    },
    {
      id: 'henry',
      name: 'Henry',
    },
  ];
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              <a>{client.name} projects</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClientPage;
