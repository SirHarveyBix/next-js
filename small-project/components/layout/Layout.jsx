import MainHeader from './MainHeader';
import { Fragment } from 'react';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
