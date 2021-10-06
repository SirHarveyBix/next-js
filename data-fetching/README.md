```js
export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;
  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProps: product,
    },
    notFound: true,
  };
}
```

```js
export async function getStaticPaths() {
  const data = await getData();
  const pathsWithParams = data.products.map((product) => ({
    params: { productId: `${product.id}` },
  }));

  return {
    // pre-generate only this data
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: 'blocking',
  };
}
```

```js
false;
```

    : get only data that's pre-fetched from params : { id }

```js
true;
```

    : allow to get other data without pre-feteching

```js
'blocking';
```

     : allow to get other data without pre-feteching, and wait till it's got

```js
    fallback: 'blocking',

```

this will be ran only on the server

```js
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
```
