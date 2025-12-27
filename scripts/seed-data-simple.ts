import dotenv from 'dotenv';
import { createClient } from '@sanity/client';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Create Sanity client directly in the script
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Required for write access
});

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN is not set in .env.local');
  console.error('📝 Please add your Sanity API token to .env.local');
  console.error('   Get your token at: https://www.sanity.io/manage/project/' + process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.error('   Then add: SANITY_API_TOKEN=your_token_here');
  process.exit(1);
}

// Helper to create content without images first (we'll add images manually in Sanity Studio)
async function seedData() {
  try {
    console.log('🌱 Starting to seed sample data...');

    // Create Authors
    console.log('Creating authors...');
    const author1 = await client.create({
      _type: 'author',
      name: 'Sarah Johnson',
      slug: { current: 'sarah-johnson' },
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Award-winning journalist with 10+ years of experience covering technology and innovation.',
            },
          ],
        },
      ],
    });

    const author2 = await client.create({
      _type: 'author',
      name: 'Michael Chen',
      slug: { current: 'michael-chen' },
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Tech enthusiast and blogger passionate about the latest trends in software development.',
            },
          ],
        },
      ],
    });

    const author3 = await client.create({
      _type: 'author',
      name: 'Emily Rodriguez',
      slug: { current: 'emily-rodriguez' },
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Community manager and content creator focused on building engaged online communities.',
            },
          ],
        },
      ],
    });

    console.log('✅ Authors created');

    // Create Categories
    console.log('Creating categories...');
    const techCategory = await client.create({
      _type: 'category',
      name: 'Technology',
      slug: { current: 'technology' },
      description: 'Latest news and insights from the tech world',
      color: 'blue',
    });

    const businessCategory = await client.create({
      _type: 'category',
      name: 'Business',
      slug: { current: 'business' },
      description: 'Business news and market analysis',
      color: 'green',
    });

    const lifestyleCategory = await client.create({
      _type: 'category',
      name: 'Lifestyle',
      slug: { current: 'lifestyle' },
      description: 'Lifestyle tips and trends',
      color: 'purple',
    });

    const newsCategory = await client.create({
      _type: 'category',
      name: 'News',
      slug: { current: 'news' },
      description: 'Breaking news and current events',
      color: 'red',
    });

    console.log('✅ Categories created');

    // Create Featured Article
    console.log('Creating featured article...');
    await client.create({
      _type: 'content',
      title: 'The Future of Artificial Intelligence: What to Expect in 2025',
      slug: { current: 'future-of-artificial-intelligence-2025' },
      type: 'article',
      excerpt: 'Explore the cutting-edge developments in AI technology and how they will reshape industries in the coming year.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Artificial Intelligence continues to evolve at an unprecedented pace. As we approach 2025, we\'re seeing remarkable breakthroughs in machine learning, natural language processing, and computer vision. These advancements are not just theoretical—they\'re already transforming how we work, communicate, and solve complex problems.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'One of the most exciting developments is the emergence of more sophisticated AI models that can understand context and nuance better than ever before. These models are being integrated into everything from healthcare diagnostics to autonomous vehicles, promising to make our lives safer and more efficient.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'However, with great power comes great responsibility. As AI becomes more capable, we must also address important questions about ethics, privacy, and the future of work. The conversation around AI governance is more critical than ever.',
            },
          ],
        },
      ],
      featuredImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-https://images.unsplash.com/photo-1677442136019-21780ecad995',
        },
      },
      author: {
        _type: 'reference',
        _ref: author1._id,
      },
      category: {
        _type: 'reference',
        _ref: techCategory._id,
      },
      tags: ['AI', 'Technology', 'Future', 'Innovation'],
      published: true,
      featured: true,
      publishedAt: new Date().toISOString(),
    });

    // Create News Articles
    console.log('Creating news articles...');
    await client.create({
      _type: 'content',
      title: 'Tech Giants Announce Major Sustainability Initiative',
      slug: { current: 'tech-giants-sustainability-initiative' },
      type: 'news',
      excerpt: 'Leading technology companies join forces to reduce carbon emissions and promote renewable energy.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'In a landmark announcement today, several major technology companies have committed to achieving carbon neutrality by 2030. This collaborative effort represents one of the largest private-sector climate initiatives in history.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The initiative includes commitments to transition to 100% renewable energy, invest in carbon capture technologies, and implement sustainable practices across their supply chains. Industry leaders believe this move will inspire other sectors to follow suit.',
            },
          ],
        },
      ],
      author: {
        _type: 'reference',
        _ref: author1._id,
      },
      category: {
        _type: 'reference',
        _ref: newsCategory._id,
      },
      tags: ['Sustainability', 'Environment', 'Technology'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
    });

    await client.create({
      _type: 'content',
      title: 'New Study Reveals Impact of Remote Work on Productivity',
      slug: { current: 'remote-work-productivity-study' },
      type: 'news',
      excerpt: 'Research shows significant productivity gains for companies that have embraced flexible work arrangements.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A comprehensive study published this week reveals that companies offering flexible remote work options have seen a 23% increase in overall productivity compared to traditional office-based models.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The research, which surveyed over 10,000 employees across various industries, also found improvements in work-life balance and employee satisfaction. However, the study notes that successful remote work requires proper infrastructure and management practices.',
            },
          ],
        },
      ],
      author: {
        _type: 'reference',
        _ref: author2._id,
      },
      category: {
        _type: 'reference',
        _ref: businessCategory._id,
      },
      tags: ['Remote Work', 'Productivity', 'Business'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
    });

    // Create Blog Posts
    console.log('Creating blog posts...');
    await client.create({
      _type: 'content',
      title: '10 Tips for Building a Successful Online Community',
      slug: { current: 'tips-building-online-community' },
      type: 'blog',
      excerpt: 'Learn the essential strategies for creating and growing an engaged online community that thrives.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Building a successful online community is both an art and a science. After years of managing communities, I\'ve learned that the key to success lies in understanding your audience and creating genuine value.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Here are my top 10 tips: 1) Define your community\'s purpose clearly, 2) Set guidelines and enforce them consistently, 3) Engage authentically with members, 4) Create regular content that adds value, 5) Recognize and reward active members, 6) Foster meaningful discussions, 7) Be transparent about decisions, 8) Use the right platform for your audience, 9) Measure what matters, and 10) Be patient—communities take time to grow.',
            },
          ],
        },
      ],
      author: {
        _type: 'reference',
        _ref: author3._id,
      },
      category: {
        _type: 'reference',
        _ref: lifestyleCategory._id,
      },
      tags: ['Community', 'Social Media', 'Tips'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
    });

    await client.create({
      _type: 'content',
      title: 'The Art of Minimalist Living: A Beginner\'s Guide',
      slug: { current: 'minimalist-living-beginners-guide' },
      type: 'blog',
      excerpt: 'Discover how embracing minimalism can lead to a more focused and fulfilling life.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Minimalism isn\'t about having less for the sake of having less. It\'s about making room for what truly matters. In our fast-paced world, minimalism offers a path to clarity and intentionality.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Start by decluttering one area at a time. Ask yourself: Does this item bring me joy or serve a purpose? If not, consider letting it go. Remember, minimalism looks different for everyone—find what works for your lifestyle.',
            },
          ],
        },
      ],
      author: {
        _type: 'reference',
        _ref: author3._id,
      },
      category: {
        _type: 'reference',
        _ref: lifestyleCategory._id,
      },
      tags: ['Lifestyle', 'Minimalism', 'Wellness'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
    });

    // Create Update
    console.log('Creating updates...');
    await client.create({
      _type: 'content',
      title: 'Platform Update: New Features and Improvements',
      slug: { current: 'platform-update-new-features' },
      type: 'update',
      excerpt: 'We\'re excited to announce several new features and improvements to enhance your experience.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We\'ve been working hard behind the scenes to bring you an even better experience. This update includes:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Improved search functionality with better results\n• Enhanced mobile experience with faster load times\n• New content categories for better organization\n• Updated design for better readability\n• Performance optimizations across the board',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We\'d love to hear your feedback on these changes. Your input helps us continue to improve!',
            },
          ],
        },
      ],
      author: {
        _type: 'reference',
        _ref: author2._id,
      },
      category: {
        _type: 'reference',
        _ref: techCategory._id,
      },
      tags: ['Update', 'Features', 'Platform'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
    });

    // Create Social Media Posts
    console.log('Creating social media posts...');
    await client.create({
      _type: 'content',
      title: 'Exciting Announcement on Twitter',
      slug: { current: 'twitter-exciting-announcement' },
      type: 'twitter',
      excerpt: 'Check out our latest announcement on Twitter!',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We\'re thrilled to share some exciting news with our community! 🎉',
            },
          ],
        },
      ],
      platform: 'twitter',
      socialMediaUrl: 'https://twitter.com/example/status/1234567890',
      embedCode: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We\'re thrilled to share some exciting news with our community! 🎉 <a href="https://twitter.com/example/status/1234567890">December 27, 2024</a></blockquote>',
      author: {
        _type: 'reference',
        _ref: author3._id,
      },
      category: {
        _type: 'reference',
        _ref: techCategory._id,
      },
      tags: ['Social Media', 'Twitter', 'Announcement'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 518400000).toISOString(),
    });

    await client.create({
      _type: 'content',
      title: 'YouTube: Product Demo Video',
      slug: { current: 'youtube-product-demo' },
      type: 'youtube',
      excerpt: 'Watch our latest product demonstration video on YouTube.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We\'ve just released a comprehensive product demo that walks you through all the key features and improvements.',
            },
          ],
        },
      ],
      platform: 'youtube',
      socialMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      author: {
        _type: 'reference',
        _ref: author2._id,
      },
      category: {
        _type: 'reference',
        _ref: techCategory._id,
      },
      tags: ['Video', 'YouTube', 'Demo'],
      published: true,
      featured: false,
      publishedAt: new Date(Date.now() - 604800000).toISOString(),
    });

    console.log('✅ Sample data created successfully!');
    console.log('\n📝 Created:');
    console.log('  - 3 Authors');
    console.log('  - 4 Categories');
    console.log('  - 1 Featured Article');
    console.log('  - 2 News Articles');
    console.log('  - 2 Blog Posts');
    console.log('  - 1 Update');
    console.log('  - 2 Social Media Posts');
    console.log('\n🎉 Your website is now populated with sample data!');
    console.log('Visit http://localhost:3000 to see your content.');
    console.log('\n💡 Note: You can add featured images manually in Sanity Studio at http://localhost:3000/studio');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seedData();

