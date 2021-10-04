import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <a href="/portfolio"> the not proper way to get to Portfolio page</a>
          {/* work but is not proper because getting ou of the app / server  losing state for exemple */}
        </li>
        <li>
          <Link href="/portfolio">proper way to get to Portfolio page</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
