import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/homePage/Hero';

export const DUMMY_POSTS = [
  {
    title: 'getting started nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is THE react framework for production - it makes building FS react apps / sites.',
    date: '2022-02-17',
    slug: 'getting-started-nextjs1',
  },
  {
    title: 'getting started nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is THE react framework for production - it makes building FS react apps / sites.',
    date: '2022-02-17',
    slug: 'getting-started-nextjs2',
  },
  {
    title: 'getting started nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is THE react framework for production - it makes building FS react apps / sites.',
    date: '2022-02-17',
    slug: 'getting-started-nextjs3',
  },
  {
    title: 'getting started nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is THE react framework for production - it makes building FS react apps / sites.',
    date: '2022-02-17',
    slug: 'getting-started-nextjs4',
  },
  {
    title: 'getting started nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is THE react framework for production - it makes building FS react apps / sites.',
    date: '2022-02-17',
    slug: 'getting-started-nextjs5',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
export default HomePage;
