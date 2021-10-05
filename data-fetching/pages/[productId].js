import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage(props) {
  const { loadedProps } = props;
  return (
    <>
      <h1>{loadedProps.title}</h1>
      <p>{loadedProps.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log('params', params);
  const productId = params.productId;
  console.log('productId', productId);

  const dataPath = path.join(process.cwd(), 'data', 'index.json');
  const jsonData = await fs.readFile(dataPath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProps: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      //TODO up this part with number of id
      { params: { productId: 'p1' } },
      { params: { productId: 'p2' } },
      { params: { productId: 'p3' } },
      { params: { productId: 'p4' } },
    ],
    fallback: false,
  };
}
export default ProductDetailPage;
