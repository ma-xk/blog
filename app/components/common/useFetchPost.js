'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import blogPosts from '/app/components/blog/blogData';

const useFetchPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchedPost = blogPosts.find((p) => p.slug === slug);
    setPost(fetchedPost);
  }, [slug]);

  return post;
};

export default useFetchPost;