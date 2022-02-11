import classes from '../../styles/MainHeader.module.css';
import Link from 'next/link';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvent</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
