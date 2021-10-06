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

const getData = async () => {
  const dataPath = path.join(process.cwd(), 'data', 'index.json');
  const jsonData = await fs.readFile(dataPath);
  const data = JSON.parse(jsonData);
  return data;
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;
  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) return { notFound: true };
  return {
    props: {
      loadedProps: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const pathsWithParams = data.products.map((product) => ({
    params: { productId: `${product.id}` },
  }));

  return {
    // pre-generate only this data
    paths: pathsWithParams,

    // false : get only data that's pre-fetched from params : { id }
    // true : allow to get other data without pre-feteching
    // 'blocking' : allow to get other data without pre-feteching, and wait till it's got
    fallback: 'blocking',
  };
}
export default ProductDetailPage;
