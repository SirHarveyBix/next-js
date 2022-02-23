import { Container, Title } from './style';
import PostsGrid from '../PostsGrid/index';

function AllPosts(props) {
  return (
    <Container>
      <Title>All Posts</Title>
      <PostsGrid posts={props.posts} />
    </Container>
  );
}
export default AllPosts;
