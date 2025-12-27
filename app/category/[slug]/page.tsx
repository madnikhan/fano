import { getContents } from '@/lib/content-sanity';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';

const categoryMap: Record<string, string> = {
  news: 'news',
  articles: 'article',
  blogs: 'blog',
  updates: 'update',
  social: 'social',
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryType = categoryMap[slug];
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  if (!categoryType && slug !== 'social') {
    notFound();
  }

  let contents;
  if (slug === 'social') {
    contents = await getContents({
      published: true,
    });
    contents = contents.filter(
      (c) => c.type === 'facebook' || c.type === 'youtube' || c.type === 'twitter'
    );
  } else {
    contents = await getContents({
      type: categoryType as any,
      published: true,
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            {contents.length} {contents.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>

        {contents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map((content) => (
              <ArticleCard key={content.id} content={content} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

