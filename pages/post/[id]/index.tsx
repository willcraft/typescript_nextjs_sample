import * as React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, router);
  return <h1>TEST id={id}</h1>;
};

export default Post;
