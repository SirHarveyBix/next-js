// [id].js file make the slug, this is the ID of the project make URL .
// [] = placeholder
// here's gonna be : http://localhost:3000/porttfolio/1 or anything beside of /1

import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  // router.pathname is the path made by NEXTjs : portfolio/[projectid]
  // router.query is made by user : /porttfolio/1 or anything beside of /1

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The unique portfolio page.</h1>
    </div>
  );
}
export default PortfolioProjectPage;
