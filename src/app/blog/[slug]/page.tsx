import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.thenexsphereglobal.com/blog/${slug}` },
    openGraph: {
      title: `${post.title} — NexSphere Global Advisors LLP`,
      description: post.excerpt,
      url: `https://www.thenexsphereglobal.com/blog/${slug}`,
      images: [{ url: post.image, alt: post.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-bold text-royal hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>

        <article>
          <div className="mb-12">
            <Badge className="mb-6">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-500 border-b border-slate-100 pb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gold" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-gold" />
                {post.author}
              </div>
              <button className="flex items-center hover:text-royal transition-colors ml-auto">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>

          <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed mb-16">
            <p className="text-xl font-medium text-navy mb-8">
              {post.excerpt}
            </p>
            <p>
              {post.content}
            </p>
            {/* Real content would have more paragraphs and formatting */}
          </div>

          <div className="bg-slate-50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-navy mb-4">Want more insights like this?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join 500+ business owners receiving our weekly newsletter on global taxation and compliance.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-royal outline-none"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
