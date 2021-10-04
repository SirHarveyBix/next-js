import Link from 'next/link';
import classes from './EventItem.module.css';

export const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readebleDate = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAdress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readebleDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAdress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
};
