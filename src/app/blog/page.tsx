import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights Hub',
  description:
    'Explore NexSphere Global Advisors LLP\'s knowledge hub — expert articles on US taxation, payroll compliance, GST, Virtual CFO strategies, and global accounting best practices.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/blog' },
  openGraph: {
    title: 'Insights Hub — NexSphere Global Advisors LLP',
    description: 'Expert articles on US tax, payroll, GST compliance, and global accounting strategies.',
    url: 'https://www.thenexsphereglobal.com/blog',
  },
};
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { blogPosts } from '@/data/blog';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogListingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Knowledge Hub"
          title="Insights for Global Growth"
          subtitle="Stay informed with our latest articles on taxation, compliance, and strategic financial advisory."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{post.category}</Badge>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-royal transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-bold text-royal group-hover:text-gold transition-colors">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
