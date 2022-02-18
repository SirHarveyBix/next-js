import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/homePage/Hero';
import { getFeaturedPosts } from '../lib/posts-utils';

function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate : 1800 ? if not, next wil Never Re build after deployment
  };
}

export default HomePage;