import { blogPosts } from "../posts";
import BlogPostContent from "./BlogPostContent";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Chima Konveksi Bandung`,
    description: post.excerpt,
    keywords: [
      post.title.toLowerCase(),
      "konveksi bandung",
      "vendor garment bandung",
    ],
    alternates: {
      canonical: `https://chima-konveksi.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Chima Konveksi Bandung`,
      description: post.excerpt,
      url: `https://chima-konveksi.vercel.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `https://chima-konveksi.vercel.app${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  return <BlogPostContent post={post} />;
}
