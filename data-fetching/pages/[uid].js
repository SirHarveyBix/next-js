function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

//this will be ran only on the server,
export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
