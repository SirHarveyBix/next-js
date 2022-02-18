import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-utils';

function AllPostsPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
