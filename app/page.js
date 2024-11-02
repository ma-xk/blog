import Link from 'next/link';
import { getAllPosts } from './lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Simple Blog</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} className="mb-4">
            <Link href={`/blog/${slug}`} className="text-blue-500 hover:underline">
              {title}
            </Link>
            <div className="text-gray-500 text-sm">{date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
