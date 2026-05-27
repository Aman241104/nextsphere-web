import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { blogPosts } from '@/data/blog';
import { ArrowRight, Calendar } from 'lucide-react';

export const BlogPreview = () => {
  // Take only the first 3 posts for the preview
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Latest Insights"
            title="Authority in Finance & Tax"
            subtitle="Expert perspectives on navigating the global financial landscape."
          />
          <Link 
            href="/blog" 
            className="hidden md:flex items-center text-royal font-bold hover:text-gold transition-colors mb-12"
          >
            View All Insights
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{post.category}</Badge>
                </div>
              </div>
              <div className="flex items-center text-xs text-slate-400 mb-3">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                {post.date}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm font-bold text-royal flex items-center group-hover:text-gold transition-colors">
                Read More
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-royal font-bold hover:text-gold transition-colors"
          >
            View All Insights
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
