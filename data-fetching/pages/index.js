import fs from 'fs/promises';
import path from 'path';

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

// this function allow next to pre render thoses data, before initializing
export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'data', 'index.json');

  const jsonData = await fs.readFile(dataPath);

  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}
