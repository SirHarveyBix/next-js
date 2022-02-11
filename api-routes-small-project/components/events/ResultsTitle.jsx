import CustomButton from '../ui/CustomButton';
import classes from '../../styles/ResultsTitle.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <CustomButton link="/events">Show all events</CustomButton>
    </section>
  );
}

export default ResultsTitle;
