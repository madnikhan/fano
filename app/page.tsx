import { getContents, getFeaturedContent } from '@/lib/content-sanity';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';

export default async function Home() {
  const featuredContent = await getFeaturedContent();
  const recentContent = await getContents({ published: true, limitCount: 6 });
  const newsContent = await getContents({ type: 'news', published: true, limitCount: 4 });
  const articlesContent = await getContents({ type: 'article', published: true, limitCount: 4 });

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {featuredContent && (
        <HeroSection featuredContent={featuredContent} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Latest News Section */}
        {newsContent.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <a href="/category/news" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsContent.map((content) => (
                <ArticleCard key={content.id} content={content} />
              ))}
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Recent Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
              <a href="/category/articles" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All →
              </a>
            </div>
            <div className="space-y-6">
              {articlesContent.map((content) => (
                <ArticleCard key={content.id} content={content} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trending</h3>
              <div className="space-y-4">
                {recentContent.slice(0, 5).map((content, index) => (
                  <a
                    key={content.id}
                    href={`/content/${content.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {content.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {content.category} • {new Date(content.createdAt).toLocaleDateString()}
          </p>
        </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* All Recent Content */}
        {recentContent.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">All Posts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentContent.map((content) => (
                <ArticleCard key={content.id} content={content} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
