import classes from '../../../styles/PostContent.module.css';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
  title: 'Getting started NextJS',
  image: 'getting-started-nextjs.png',
  content: '# This is our first post',
  date: '2022-02-17',
  slug: 'getting-started-nextjs1',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
