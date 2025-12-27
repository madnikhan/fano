import { getContent, getContents } from '@/lib/content-sanity';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { FiEye, FiHeart, FiFacebook, FiYoutube, FiTwitter, FiShare2 } from 'react-icons/fi';
import ArticleCard from '@/components/ArticleCard';
import PortableText from '@/components/PortableText';

// Note: generateStaticParams is commented out for dynamic rendering
// Uncomment if you want static generation
// export async function generateStaticParams() {
//   const contents = await getContents({ published: true });
//   return contents.map((content) => ({
//     slug: content.slug,
//   }));
// }

export default async function ContentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContent(slug);

  if (!content) {
    notFound();
  }

  const allContents = await getContents({ published: true });
  const relatedContent = allContents
    .filter((c) => c.id !== content.id && c.category === content.category)
    .slice(0, 3);

  const getPlatformIcon = () => {
    switch (content.platform) {
      case 'facebook':
        return <FiFacebook className="w-5 h-5" />;
      case 'youtube':
        return <FiYoutube className="w-5 h-5" />;
      case 'twitter':
        return <FiTwitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full uppercase">
              {content.category}
            </span>
            {content.platform && (
              <span className="flex items-center space-x-2 px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                {getPlatformIcon()}
                <span className="capitalize">{content.platform}</span>
              </span>
            )}
            <span className="text-gray-500 text-sm">
              {format(new Date(content.createdAt), 'MMMM d, yyyy')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h1>

          {content.excerpt && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{content.excerpt}</p>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {content.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{content.author}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(content.createdAt), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <FiEye className="w-5 h-5" />
                <span>{content.views || 0}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiHeart className="w-5 h-5" />
                <span>{content.likes || 0}</span>
              </div>
              <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                <FiShare2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {content.featuredImage && (
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image
              src={content.featuredImage}
              alt={content.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Social Media Embed */}
        {content.embedCode && (
          <div className="mb-8" dangerouslySetInnerHTML={{ __html: content.embedCode }} />
        )}

        {content.socialMediaUrl && !content.embedCode && (
          <div className="mb-8">
            <a
              href={content.socialMediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <span>View on {content.platform}</span>
              {getPlatformIcon()}
            </a>
          </div>
        )}

        {/* Content */}
        <div className="mb-12">
          <PortableText content={content.content} />
        </div>

        {/* Tags */}
        {content.tags && content.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pt-8 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">Tags:</span>
            {content.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Related Content */}
      {relatedContent.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedContent.map((related) => (
              <ArticleCard key={related.id} content={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

