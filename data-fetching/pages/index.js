import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'data', 'index.json');
  const jsonData = await fs.readFile(dataPath);
  const data = JSON.parse(jsonData);

  // no data handler
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }
  // no data handler
  if (!data) {
    return {
      redirect: '/no-data',
    };
  }
  return {
    props: {
      products: data.products,
    },
    // nextjs will 'update'> regenerated the page / data every 30 seconds
    revalidate: 1,
  };
}
