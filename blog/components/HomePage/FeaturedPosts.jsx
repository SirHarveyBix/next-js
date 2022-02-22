import classes from '../../styles/FeaturedPosts.module.css';
import PostsGrid from '../posts/PostsGrid';

export default function FeaturedPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
