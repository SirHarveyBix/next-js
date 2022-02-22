import classes from '../../styles/Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <Image
        className={classes.image}
        src="/images/site/myself.jpeg"
        alt="myself"
        width={350}
        height={350}
      />
      <h1>Hi, I'm Guillaume</h1>
      <p>
        I launch this project to increase my Next and react skill, but I'm rather oriented toward
        back end
      </p>
    </section>
  );
}
