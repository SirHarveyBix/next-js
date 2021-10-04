import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load a Project</button>
    </div>
  );
}
export default ClientProjectsPage;
