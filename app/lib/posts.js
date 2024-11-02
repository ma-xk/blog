import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app', 'posts');

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.html'))
      .map((fileName) => {
        const slug = fileName.replace(/\.html$/, '');
        const filePath = path.join(postsDirectory, fileName);
        const content = fs.readFileSync(filePath, 'utf8');
  
        // Extract title from HTML content
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : slug;
  
        // Extract date from HTML metadata
        const dateMatch = content.match(/<meta name="date" content="(.*?)">/);
        const date = dateMatch ? dateMatch[1] : 'Unknown Date';
  
        return { slug, title, date };
      });
    return posts;
  }  

  export function getPostBySlug(slug) {
    const filePath = path.join(postsDirectory, `${slug}.html`);
    if (!fs.existsSync(filePath)) {
      throw new Error('Post not found');
    }
    const content = fs.readFileSync(filePath, 'utf8');
  
    // Extract title and date metadata
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : slug;
  
    const dateMatch = content.match(/<meta name="date" content="(.*?)">/);
    const date = dateMatch ? dateMatch[1] : 'Unknown Date';
  
    return { title, date, content };
  }
  