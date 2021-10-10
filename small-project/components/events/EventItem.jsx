import CustomButton from '../ui/CustomButton';
import classes from '../../styles/EventItem.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
            <DateIcon />
            <time>{readebleDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAdress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <CustomButton link={exploreLink}>
            <span> Explore Event </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </CustomButton>
        </div>
      </div>
    </li>
  );
};
