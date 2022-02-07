[[productId].js](./pages/products/[productId].js)

Pre-generate page :

Allow next to pre-render thoses data, before initializing, `return` will pass to the page component as props

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
    revalidate: 30,
    notFound: true,
  };
}
```

```js
export async function getStaticPaths() {
  return {
    // pre-generate only this data
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: 'blocking',
  };
}
```

```js
fallback: 'blocking';
```

`false` : get only data that's pre-fetched from params : { id }

`true` : allow to get other data without pre-feteching

`'blocking'` : allow to get other data without pre-feteching, and wait till it's got

#

[[uid].js](./pages/[uid].js)

This will be ran only on the server / will be generated only at the request

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

### A Note About useSWR

> _Copied from the course_

In the next lecture, we'll use the `useSWR` hook.

This hook generally still works as explained, but there is **one adjustment you'll have to make.**

You must know add a default "fetcher" when working with useSWR:

```js
useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
```

The details will be explained in the next lecture, but if you run into issues using this hook, make the change mentioned above!
