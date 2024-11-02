import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '../../../lib/posts';

export default function Post({ params }) {
  const { slug } = params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch (error) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{post.date}</div>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
