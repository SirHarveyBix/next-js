// [...] >> the query will catch all routes like /blog/post/2021/12/32 will catch = ['post', '2021', '12', '32'] as path /blog/post/2021/12/32

import { useRouter } from 'next/router';

function BlogPostPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
}

export default BlogPostPage;
