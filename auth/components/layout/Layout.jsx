import { SessionProvider } from 'next-auth/react';
import MainNavigation from './MainNavigation/index';

function Layout(props) {
  return (
    <>
      <SessionProvider>
        <MainNavigation />
      </SessionProvider>
      <main>{props.children}</main>
    </>
  );
}
export default Layout;
