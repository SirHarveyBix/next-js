import PostContent from '../../components/posts/postDetails/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-utils';

function PostDetailPage(props) {
  const { post } = props;
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postDetail = getPostData(slug);

  return {
    props: {
      post: postDetail,
    },
    // revalidate,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: 'blocking',
  };
}

export default PostDetailPage;
