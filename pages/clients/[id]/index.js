import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // set up a new url with router : pathname is the argument & query is what will be sent to the url to get on that specific page
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'maxproject' },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load max's Project</button>
    </div>
  );
}
export default ClientProjectsPage;
